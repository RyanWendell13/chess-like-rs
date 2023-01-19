use std::{collections::{HashMap}, result};
use actix_web::{get, post, web::{self, Data}, App, HttpResponse, HttpServer, Responder};
use futures::StreamExt;
use tera::{Tera, Context};
use mongodb::{self, Client, bson::{doc, bson, Bson, Document, self}, options::FindOptions, Collection, Cursor};
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

    let mut cursor: Cursor<bson::Document> = categories_collection.find(None, None).await.unwrap();
    let mut data: Vec<Category> = vec![];
    while let Some (result) = 
        cursor.next().await {
            let category: CategoryIncomplete = bson::from_bson(Bson::Document(result.unwrap())).unwrap();
            let mut games: Vec<Game> = vec![];
            for game_id in category.games {
                let filter = doc! {"_id": game_id};
                let game_result = games_collection.find_one(filter, None).await.unwrap();
                let game_info: Game = bson::from_bson(Bson::Document(game_result.unwrap())).unwrap();
                games.push(game_info);
            }
            // category._id,category.name,games,category.description,
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
    println!("{:?}", data);
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
    HttpServer::new(move || {
        App::new()
        .app_data(Data::new(tera.clone()))
        .service(home)
        .service(game)
        .service(Files::new("/static", "static"))
    })
    .bind(("127.0.0.1",std::env::var("PORT").expect("PORT must be set in .env file").parse::<u16>().unwrap()))?
    .run()
    .await
}
