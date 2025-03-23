// all the backend logic for finance page 
const getDB = require("../utils/Databse").getDB;
const mongodb = require("mongodb")
class Logic{
    constructor(name , title  , tags, email , emailTag , phone , phoneTag , amount , amountCategory , company , address , birthday , description , id){
      this.name = name;
      this.title = title;
      this.email = email;
      this.emailTag = emailTag;
      this.phone = phone;
      this.phoneTag = phoneTag;
      this.amount = amount;
      this.amountCategory = amountCategory;
      this.company = company;
      this.address = address;
      this.birthday = birthday;
      this.description = description;
      this.tags = tags;
      this._id = id;
    }
 
    save(){
        const db = getDB();
        let dbOP;
        if(this._id){
            dbOP = db.collection("ClientAndVendors").updateOne({_id : new mongodb.ObjectId(this._id)} , {$set : this});
        }else{
            dbOP = db.collection("ClientAndVendors").insertOne(this);
        }
        return dbOP.then(result => {console.log(result)}).catch(err =>{console.log(err)});
    }

    static fetchAll(){
        const db = getDB();
        return db.collection("ClientAndVendors").find().toArray().then(
          products => {
            // console.log(products);
            return products;
          }).catch(err => {
          console.log(err);
        });
      }

      static delete(prodId){
        const db = getDB();
        return db.collection("ClientAndVendors").deleteOne({_id : new mongodb.ObjectId(prodId)}).then(result => {
          console.log("Deleted");
        }).catch(err => {
          console.log(err)
        });
      }
}

module.exports = Logic;