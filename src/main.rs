use actix_web::{get, web::{self, Data}, App, HttpResponse, HttpServer, Responder};
use futures::StreamExt;
use tera::{Tera, Context};
use mongodb::{self, Client, bson::{doc, Bson, Document, self}, Collection, Cursor, options::FindOptions};
use dotenv::dotenv;
use actix_files::Files;

use crate::models::{Game, Category, CategoryIncomplete};
mod models;

#[get("/")]
async fn home(tera: web::Data<Tera>) -> impl Responder {
    dotenv().ok();
    let mongo_uri = std::env::var("MONGO_URI").expect("MONGO_URI must be set in .env file");
    let client = Client::with_uri_str(mongo_uri).await.unwrap();
    let categories_collection: Collection<bson::Document> = client.database("chess-like").collection("categories");
    let games_collection: Collection<bson::Document> = client.database("chess-like").collection("games");
    let alphabetical_sort_option = FindOptions::builder().sort(doc! { "name": 1 }).build();
    let mut category_cursor: Cursor<bson::Document> = categories_collection.find(None, alphabetical_sort_option).await.unwrap();
    let mut data: Vec<Category> = vec![];
    while let Some (result) = 
        category_cursor.next().await {
            let category: CategoryIncomplete = bson::from_bson(Bson::Document(result.unwrap())).unwrap();
            let mut games: Vec<Game> = vec![];
            let filter = doc! {"_id": {"$in": category.games}};
            let mut game_cursor = games_collection.find(filter, None).await.unwrap();
            while let Some(game_result) =
                game_cursor.next().await {
                    games.push(bson::from_bson(Bson::Document(game_result.unwrap())).unwrap());
                }
            data.push(Category {_id: category._id, name: category.name, games, description: category.description });
    }
    let mut context = Context::new();
    context.insert("data", &data);
    let s = tera.render("home.html", &context).unwrap();
    return HttpResponse::Ok().body(s);
}

#[get("/games/{name}")]
async fn game(name: web::Path<String>, tera: web::Data<Tera>) -> impl Responder {
    let mongo_uri = std::env::var("MONGO_URI").expect("MONGO_URI must be set in .env file");
    let client = Client::with_uri_str(mongo_uri).await.unwrap();
    let collection: Collection<Document> = client.database("chess-like").collection("games");
    let filter = doc! {"name" : name.to_string()};
    let result = collection.find_one(filter, None).await.unwrap().unwrap();
    let data: Game = bson::from_bson(Bson::Document(result)).unwrap();
    let mut context = Context::new();
    context.insert("issues_len", &data.issues.len());
    context.insert("data", &data);
    let s = tera.render("game.html", &context).unwrap();
    return HttpResponse::Ok().body(s);
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();
    
    let tera = match Tera::new("templates/**/*") {
        Ok(t) => t,
        Err(e) => {
            println!("Parsing error(s): {}", e);
            ::std::process::exit(1);
        }
    };
    println!("Listening on {}", std::env::var("PORT").unwrap());
    HttpServer::new(move || {
        App::new()
        .app_data(Data::new(tera.clone()))
        .service(home)
        .service(game)
        .service(Files::new("/", "static"))
    })
    .bind(("127.0.0.1",std::env::var("PORT").expect("PORT must be set in .env file").parse::<u16>().unwrap()))?
    .run()
    .await
}
