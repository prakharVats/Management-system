// all the backend logic for finance page 
const getDB = require("../utils/Databse").getDB;
const mongodb = require("mongodb")

//     "name" : "milk and breakfast",
//     "startTime" : "9:00",
//     "endTime" : "10:00",
//     "status" : "pending",
//     "priority" : "medium"


class TaskLogic{
    constructor(name , startTime , endTime , priority , status , time , id){
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.status = status;
        this.priority = priority;
        this.time = time;
        this._id = id;
    }
 
    save(){
        const db = getDB();
        let dbOP;
        if(this._id){
            dbOP = db.collection("tasks").updateOne({_id : new mongodb.ObjectId(this._id)} , {$set : this});
        }else{
            dbOP = db.collection("tasks").insertOne(this);
        }
        return dbOP.then(result => {console.log(result)}).catch(err =>{console.log(err)});
    }

    static fetchAll(){
        const db = getDB();
        return db.collection("tasks").find().toArray().then(
          products => {
            // console.log(products);
            console.log("data fetched!")
            return products;
          }).catch(err => {
          console.log(err);
        });
      }

      static delete(prodId){
        const db = getDB();
        return db.collection("tasks").deleteOne({_id : new mongodb.ObjectId(prodId)}).then(result => {
          console.log("Deleted");
        }).catch(err => {
          console.log(err)
        });
      }
}

module.exports = TaskLogic;