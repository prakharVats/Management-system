// all the backend logic for finance page 
const getDB = require("../utils/Databse").getDB;
const mongodb = require("mongodb")
class ProjectLogic{
    constructor(name , belongs , type , id){
        this.name = name;
        this.belongs = belongs;
        this.type = type;
        this._id = id;
    }
 
    save(){
        const db = getDB();
        let dbOP;
        if(this._id){
            dbOP = db.collection("projects").updateOne({_id : new mongodb.ObjectId(this._id)} , {$set : this});
        }else{
            dbOP = db.collection("projects").insertOne(this);
        }
        return dbOP.then(result => {console.log(result)}).catch(err =>{console.log(err)});
    }

    static fetchAll(){
        const db = getDB();
        return db.collection("projects").find().toArray().then(
          products => {
            // console.log(products);
            return products;
          }).catch(err => {
          console.log(err);
        });
      }

      static delete(prodId){
        const db = getDB();
        return db.collection("projects").deleteOne({_id : new mongodb.ObjectId(prodId)}).then(result => {
          console.log("Deleted");
        }).catch(err => {
          console.log(err)
        });
      }
}

module.exports = ProjectLogic;