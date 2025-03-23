const Logic = require("../models/FinanceLogic")
const mongodb = require("mongodb")


// fetching the items
exports.getAddProduct = (req, res, next) => {
    Logic.fetchAll().then(products => {
        console.log(products);
        res.json(products);
    }).catch(err =>{
        console.log(err);
    })
};


// adding an item
exports.postAddProduct = (req , res , next) => {
    const name = req.body.name;
    const price = req.body.price;
    const category = req.body.category;
    const date = req.body.date;
    const data = new Logic(name , price , category , date);

    data.save().then(result => {
        console.log("item added!");
    }).catch(err => {
        console.log(err);
    })
    console.log(name , price , category , date);
}
 
// updating an item
exports.postUpdate = (req , res , next) => {
    const id = req.body.id;
    const name = req.body.name;
    const price = req.body.price;
    const category = req.body.category;
    const date = req.body.date;
    const data = new Logic(name , price , category , date , new mongodb.ObjectId(id));

    data.save().then(res => {
        console.log("Item updated");
    }).catch(err => {
        console.log(err , "Error");
    })
    console.log(name , price , category , date);
}

// deleting an item

exports.postDeleteProduct = (req, res, next) => {
    const id = req.body.id;
      Logic.delete(new mongodb.ObjectId(id))
      .then(() => {
        console.log('DESTROYED PRODUCT');
      })
      .catch(err => console.log(err));
  };