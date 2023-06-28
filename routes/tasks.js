const express = require('express')
const router = express.Router()

const { getAllTasks, addTask, getSingleTask, updateTask, deleteTask } = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(addTask)
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)


module.exports = router

