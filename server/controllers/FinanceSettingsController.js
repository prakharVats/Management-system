const Logic = require("../models/SettingLogic")
const mongodb = require("mongodb")


// fetching the items
exports.getSettings = (req, res, next) => {
    Logic.fetchAll().then(products => {
        console.log(products);
        res.json(products);
    }).catch(err =>{
        console.log(err);
    })
};


// updating an item
exports.postUpdate = (req , res , next) => {
    const id = req.body.id;
    const month = req.body.month;
    const savingGoals = req.body.savingGoals;
    const expenseLimit = req.body.expenseLimit;
    const billExpectation = req.body.billExpectation;

    const data = new Logic(month , savingGoals , expenseLimit , billExpectation , new mongodb.ObjectId(id));

    data.save().then(res => {
        console.log("Item updated");
    }).catch(err => {
        console.log(err , "Error");
    })
}
