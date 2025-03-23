let _db;
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

// establishing the connection
const mongoConnect = (callback) =>{
    MongoClient.connect("mongodb+srv://vatsprakhar91:thisIsTheKey@cluster0.7boro.mongodb.net/ManagementSystem?retryWrites=true&w=majority&appName=Cluster0").then(res => {
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