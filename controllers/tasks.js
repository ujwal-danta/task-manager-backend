const Task = require('../models/task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(201).json(tasks)
    } catch (error) {
       
        res.status(500).json({ error })
    }
}

const addTask = async (req, res) => {
    try {
        const newTask = new Task(req.body)
        await newTask.save()
        res.status(201).json({ newTask })
    } catch (error) {
        const { message } = error.errors.name
       
        res.status(500).json({ message })
    }

}

const getSingleTask = async (req, res) => {
    try {
        const { id: taskId } = req.params
        const task = await Task.findById(taskId).exec()
        if (!task) {
            return res.status(404).json(`No task with id - ${taskId}`)
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json(error)
    }



}

const updateTask = async (req, res) => {
    try {
        const { id: taskId } = req.params
        const query = req.body
      
        const updatedTask = await Task.findOneAndUpdate({ _id: taskId }, query, {
            new: true,
            runValidators: true
        })
        res.status(200).json(updatedTask)
    } catch (error) {
       
        res.status(500).json(error)
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id: taskId } = req.params
        const deletedTask = await Task.findOneAndDelete({ _id: taskId }).exec()
        if (!deletedTask) {
            return res.status(404).json(`No task with id - ${taskId}`)
        }
        res.status(200).json(deletedTask)
    } catch (error) {
        res.status(500).json(error)
    }
}



module.exports = { getAllTasks, addTask, getSingleTask, updateTask, deleteTask }