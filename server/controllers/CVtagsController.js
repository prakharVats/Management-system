const Logic = require("../models/CVtagsLogic")
const mongodb = require("mongodb")


// fetching the items
exports.getCVtags = (req, res, next) => {
    Logic.fetchAll().then(products => {
        res.json(products);
    }).catch(err =>{
        console.log(err);
    })
};

exports.postCVUpdate = (req , res , next) => {
    const id = req.body.id;
    const array = req.body.array;
    const data = new Logic(array , new mongodb.ObjectId(id));

    data.save().then(res => {
        console.log("Item updated");
    }).catch(err => {
        console.log(err , "Error");
    })
}