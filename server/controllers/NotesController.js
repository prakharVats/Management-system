const Logic = require("../models/NotesLogic")
const mongodb = require("mongodb")


// fetching the items
exports.getNotes = (req, res, next) => {
    Logic.fetchAll().then(products => {
        console.log(products);
        res.json(products);
    }).catch(err =>{
        console.log(err);
    })
};


// adding an item
exports.postAddNotes = (req , res , next) => {
    const title = req.body.title;
    const description = req.body.description;
    const tasks = req.body.tasks;
    const tags = req.body.tags;
    const archive = req.body.archive;
    const data = new Logic(title , description , tasks , tags , archive);

    data.save().then(result => {
        console.log("item added!");
    }).catch(err => {
        console.log(err);
    })
}
 
// updating an item
exports.postUpdate = (req , res , next) => {
    const id = req.body.id;
    const title = req.body.title;
    const description = req.body.description;
    const tasks = req.body.tasks;
    const tags = req.body.tags;
    const archive = req.body.archive;
    const data = new Logic(title , description , tasks , tags , archive , new mongodb.ObjectId(id));

    data.save().then(res => {
        console.log("Item updated");
    }).catch(err => {
        console.log(err , "Error");
    })
}

// deleting an item

exports.deleteNotes = (req, res, next) => {
    const id = req.body.id;
      Logic.delete(new mongodb.ObjectId(id))
      .then(() => {
        console.log('DESTROYED PRODUCT');
      })
      .catch(err => console.log(err));
  };