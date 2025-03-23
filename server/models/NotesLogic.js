// all the backend logic for finance page 
const getDB = require("../utils/Databse").getDB;
const mongodb = require("mongodb")
class Logic{
    constructor(title , description , tasks , tags , archive , id){
        this.title = title;
        this.description = description;
        this.tasks = tasks;
        this.tags = tags;
        this.archive = archive;
        this._id = id;
    }
 
    save(){
        const db = getDB();
        let dbOP;
        if(this._id){
            dbOP = db.collection("notes").updateOne({_id : new mongodb.ObjectId(this._id)} , {$set : this});
        }else{
            dbOP = db.collection("notes").insertOne(this);
        }
        return dbOP.then(result => {console.log(result)}).catch(err =>{console.log(err)});
    }

    static fetchAll(){
        const db = getDB();
        return db.collection("notes").find().toArray().then(
          products => {
            // console.log(products);
            return products;
          }).catch(err => {
          console.log(err);
        });
      }

      static delete(prodId){
        const db = getDB();
        return db.collection("notes").deleteOne({_id : new mongodb.ObjectId(prodId)}).then(result => {
          console.log("Deleted");
        }).catch(err => {
          console.log(err)
        });
      }
}

module.exports = Logic;