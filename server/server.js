const express = require("express")
const Cors = require("cors")
const app = express();

// local imports 
const Router = require("./routers/Router")
const mongoConnect = require("./utils/Databse").mongoConnect

const port = process.env.PORT || 3000;


// const taskRouter = require("./routers/Router")
app.use(Cors());
app.use(express.json());


app.use("/finance" , Router)
app.use("/task" , Router)
app.use("/project" , Router)
app.use("/notes" , Router)
app.use("/clientsAndvendors" , Router)

mongoConnect(() => app.listen(3000 , () => {
    console.log("listening at post : http://localhost:3000/");
})) 
 
