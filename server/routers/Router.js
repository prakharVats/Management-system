const express = require("express");
const router = express.Router();

// finance imports 
const getAddProduct = require("../controllers/FinancialController").getAddProduct;
const postAddProduct = require("../controllers/FinancialController").postAddProduct;
const postUpdate = require("../controllers/FinancialController").postUpdate;
const postDeleteProduct= require("../controllers/FinancialController").postDeleteProduct;

// finance settings
const getSettings = require("../controllers/FinanceSettingsController").getSettings;
const settingsUpdate = require("../controllers/FinanceSettingsController").postUpdate;






// task imports
const getTasks = require("../controllers/TaskController").getTasks;
const postAddTask = require("../controllers/TaskController").postAddTask;
const postUpdateTask = require("../controllers/TaskController").postUpdateTask;
const postRemoveTask = require("../controllers/TaskController").postRemoveTask;

// project and folder imports
const getProject = require("../controllers/ProjectController").getProject;
const postProject = require("../controllers/ProjectController").postAddProject


// Notes
const getNotes = require("../controllers/NotesController").getNotes;
const deleteNotes = require("../controllers/NotesController").deleteNotes;
const postUpdateNotes = require("../controllers/NotesController").postUpdate
const postAddNotes = require("../controllers/NotesController").postAddNotes;
const getArchive = require("../controllers/ArchiveController").getArchive;



// clients&vendors
const getCV = require("../controllers/C&VController").getCV;
const postAddCV = require("../controllers/C&VController").postAddCV;
const postUpdateCV = require("../controllers/C&VController").postUpdateCV;
const postRemoveCV = require("../controllers/C&VController").postRemoveCV;



// CV tags
const getCVtags = require("../controllers/CVtagsController").getCVtags;
const postCVUpdate = require("../controllers/CVtagsController").postCVUpdate;



// finance routers 
router.get("/getfinancelist" , getAddProduct)
router.post("/postfinancelist" , postAddProduct)
router.post("/postupdate" , postUpdate)
router.post("/removeItem" , postDeleteProduct)

// settings routers
router.get("/getSettings" , getSettings)
router.post("/settingsUpdate" , settingsUpdate)


// task routers
router.get("/getTask" , getTasks)
router.post("/postTask" , postAddTask)
router.post("/postUpdateTask" , postUpdateTask)
router.post("/removeTask" , postRemoveTask)


// Project routers
router.get("/getProject" , getProject)
router.post("/postProject" , postProject)


// Notes routers
router.get("/getNotes" , getNotes)
router.post("/deleteNotes" , deleteNotes)
router.post("/postAddNotes" , postAddNotes)
router.post("/updateNotes" , postUpdateNotes)
router.get("/getArchives" , getArchive)


// clientsAndvendors router
router.get("/getCV" , getCV);
router.post("/postAddCV" , postAddCV);
router.post("/postUpdateCV" , postUpdateCV);
router.post("/postRemoveCV" , postRemoveCV);

// CV tags router
router.get("/getCVtags" , getCVtags);
router.post("/postCVUpdate" , postCVUpdate);


module.exports = router;