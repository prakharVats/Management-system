const Logic = require("../models/C&VLogic")
const mongodb = require("mongodb")


// fetching the items
exports.getCV = (req, res, next) => {
    Logic.fetchAll().then(products => {
        console.log(products);
        res.json(products);
    }).catch(err =>{
        console.log(err);
    })
};


// adding an item
exports.postAddCV = (req , res , next) => { 
    const name = req.body.name;
    const title = req.body.title;
    const email = req.body.email;
    const emailTag = req.body.emailTag;
    const phone = req.body.phone;
    const phoneTag = req.body.phoneTag;
    const amount = req.body.amount;
    const amountCategory = req.body.amountCategory;
    const company = req.body.company;
    const address = req.body.address;
    const birthday = req.body.birthday;
    const description = req.body.description;
    const tags = req.body.tags;


    const data = new Logic(name , title , tags , email , emailTag , phone , phoneTag , amount , amountCategory , company , address , birthday , description);

    data.save().then(result => {
        console.log("item added!" , result);
    }).catch(err => {
        console.log(err);
    })
  
}
// updating an item
exports.postUpdateCV = (req , res , next) => {
    const name = req.body.name;
    const title = req.body.title;
    const amount = req.body.amount;
    const amountCategory = req.body.amountCategory;
    const company = req.body.company;
    const email = req.body.email;
    const emailTag = req.body.emailTag;
    const phone = req.body.phone;
    const phoneTag = req.body.phoneTag;
    const address = req.body.address;
    const birthday = req.body.birthday;
    const description = req.body.description;
    const tags = req.body.tags;
    const id = req.body.id;

    const data = new Logic(name , title , tags , email , emailTag , phone , phoneTag , amount , amountCategory , company , address , birthday , description , new mongodb.ObjectId(id));

    data.save().then(res => {
        console.log("Item updated");
    }).catch(err => {
        console.log(err , "Error");
    })
}

// deleting an item
exports.postRemoveCV = (req, res, next) => {
    const id = req.body.id;
      Logic.delete(new mongodb.ObjectId(id))
      .then(() => {
        console.log('DESTROYED PRODUCT');
      })
      .catch(err => console.log(err));
  };