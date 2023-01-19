use mongodb::bson::oid::ObjectId;
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Game {
    _id: ObjectId,
    name: String,
    subtitle: String,
    instructions: Vec<String>,
    pieces: Vec<Piece>,
    tiles: Vec<Tiles>,
    pub issues: Vec<String>,
    script: String
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Tiles {
    name: String,
    color: String,
    _id: ObjectId
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Piece {
    name: String,
    images: Vec<String>,
    _id: ObjectId
}    

#[derive(Debug, Serialize, Deserialize)]
pub struct CategoryIncomplete{
    pub _id: ObjectId,
    pub name: String,
    pub games: Vec<ObjectId>,
    pub description: String
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Category{
    pub _id: ObjectId,
    pub name: String,
    pub games: Vec<Game>,
    pub description: String
}
