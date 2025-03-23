const Logic = require("../models/ArchiveLogic")
const mongodb = require("mongodb")


// fetching the items
exports.getArchive = (req, res, next) => {
    Logic.fetchAll().then(products => {
        res.json(products);
    }).catch(err =>{
        console.log(err);
    })
};