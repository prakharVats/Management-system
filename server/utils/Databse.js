let _db;
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
require("dotenv").config();

const mongoConnect = (callback) =>{
    MongoClient.connect(process.env.ApiKey).then(res => {
        console.log("database connected!");
        _db = res.db();  //storing the connection
        callback();
    }).catch(err => {
        console.error("Dabase connection failed" , err);
        callback(err);
    })
}

const getDB = () =>{
    if(_db){
        return _db
    }
    console.error("No database found!");
    return null;
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;