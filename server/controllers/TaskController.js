const TaskLogic = require("../models/TaskLogic.js")
const mongodb = require("mongodb")

// fetching the items
exports.getTasks = (req, res, next) => {
    TaskLogic.fetchAll().then(products => {
        console.log("this is data :: ",products);
        res.json(products);
    }).catch(err =>{
        console.log(err);
    })
};

exports.postAddTask = (req , res , next) => {

    console.log(req.body);
    const name = req.body.name;
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;
    const priority = req.body.priority;
    const time = req.body.time;
    const status = req.body.status;
    const data = new TaskLogic(name , startTime , endTime , priority , status , time);

    data.save().then(result => {
        console.log("item added!");
    }).catch(err => {
        console.log(err);
    })

    console.log(name , startTime , endTime , priority , status , time);
}
 
exports.postUpdateTask = (req , res , next) => {
    const id = req.body.id;
    const name = req.body.name;
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;
    const priority = req.body.priority;
    const time = req.body.time;
    const status = req.body.status;
    const data = new TaskLogic(name , startTime , endTime , priority  , status , time , new mongodb.ObjectId(id));

    data.save().then(res => {
        console.log("Item updated");
    }).catch(err => {
        console.log(err , "Error");
    })
    console.log(name);
}

exports.postRemoveTask = (req, res, next) => {
    const id = req.body.id;
    TaskLogic.delete(new mongodb.ObjectId(id))
      .then(() => {
        console.log('DESTROYED PRODUCT');
      })
      .catch(err => console.log(err));
  };