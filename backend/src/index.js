require('../db/db')
let express = require('express')
let app = express()
let bcrypt = require('bcrypt')
let bodyparser = require('body-parser')
let cookieParser = require('cookie-parser')
let cors = require('cors')
let Tasks = require('../model/Task')
let port = 8000

//_____________________________________________________________________________
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
//_____________________________________________________________________________

app.post("/post",async(req,res)=>{
    try {
        const task = new Tasks({
            task:req.body.task
        })

        await task.save()

        res.status(201).send({task})

    } catch (error) {
        res.status(401).send(`There is a error in the code : ${error}`) 
    }
})

app.get("/latesttasks",cors(),async(req,res)=>{
    try {
        const task = await Tasks.find().limit(5)

        console.log(task);
        

        res.status(201).send({task})

    } catch (error) {
        res.status(401).send(`There is a error in the code : ${error}`) 
    }
})

app.get("/alltask",cors(),async(req,res)=>{
    try {
        const task = await Tasks.find()

        console.log(task);
        

        res.status(201).send({task})

    } catch (error) {
        res.status(401).send(`There is a error in the code : ${error}`) 
    }
})

app.put("/edit/:id",cors(),async(req,res)=>{
    try {
        const Task = await Tasks.findById({_id:req.params.id})       
        
        console.log(Task);

        Task.task = req.body.task


        console.log(Task.task);
        
        
        await Task.save()

        res.status(201).send({Task})

    } catch (error) {
        res.status(401).send(`There is a error in the code : ${error}`) 
    }
})

app.delete("/delete/:id",cors(),async(req,res)=>{
    try {
        const Task = await Tasks.findByIdAndDelete({_id:req.params.id})       

        res.status(201).send({Task})

    } catch (error) {
        res.status(401).send(`There is a error in the code : ${error}`) 
    }
})

app.listen(port,()=>{
    console.log(`Your server is live at ${port}`)
})