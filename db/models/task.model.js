const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    description:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    }

})


const Task = mongoose.model('Task',TaskSchema);

module.exports = {Task}