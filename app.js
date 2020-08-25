const express = require('express');
const app = express();
const {mongoose} = require('./db/mongoose');
const url = 'mongodb://localhost:27017/TaskManager';
const bodyParser = require('body-parser');
const parseurl = require('parseurl');
const {Task} = require('./db/models/task.model');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());




// const tasks = [{
//     id: 1,
//     title: 'Learn React',
//     description: 'Learn how to use react in building web app'
//     }, {
//     id: 2,
//     title: 'Learn Node',
//     description: 'Learn how to use node in building server'
//     }, {
//     id: 3,
//     title: 'Learn Array Manipulation',
//     description: 'Learn how to manipulate arrays in javascript'
//     }];


// ROUTES

//get all lists from the database and show them
app.get('/api/tasks',(req,res)=>{
    Task.find({}).then((tasks)=>{
        console.log(res);
        res.send(tasks);
    });
})

//create new task and post it in the database
app.post('/api/tasks',(req,res)=>{
    let title = req.body.title;
    let description = req.body.description;

    let newTask = new Task({
        title,
        description
    });

    newTask.save().then((taskDoc)=>{
        res.send(taskDoc);
    })
})

//update a certain task
app.put('/api/tasks/:id',(req,res)=>{
    console.log(req.params.id)
    console.log(req.body);
    Task.findByIdAndUpdate( req.params.id,{
        
        $set: req.body
    }).then((updatedTask)=>{
       
        res.send(updatedTask);
    });
});

//delete a task
app.delete('/api/tasks/:id',(req,res)=>{
    console.log(req.params.id)
    Task.findByIdAndRemove( req.params.id).then((removedTask)=>{
        console.log(removedTask);
        res.send({
             message: "Todo successfully deleted",
                id: req.params.id
        });
    })
})

app.get('/api',(req,res)=>{
    res.send('Welcome to the Task Manager!');
})

app.listen(4000,()=>{
    console.log("Server is listening on server 4000");
})