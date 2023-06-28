const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, ' This field cannot be empty !'],
        trim: true,
        maxLength: [20, 'Length should not exceed 20 characters']
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
})


const Task = mongoose.model('Task', taskSchema)

module.exports = Task