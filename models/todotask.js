const mongoose = require('mongoose')
//setting up your schema/blueprint
const todoTaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now //default present date
    }
})
//exporting your model
module.exports = mongoose.model('TodoTask', todoTaskSchema, 'tasks') //name of TodoTask, assigning to the schema, tasks is the collection name(optional args)


