let mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/taskmanager")
.then(()=>{
    console.log(`The database is connected successfully.`)
})
.catch((err)=>{
    console.log(`There is a error in this code : ${err}`)
})