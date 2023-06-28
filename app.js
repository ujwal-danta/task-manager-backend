const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3001
const connectDB = require('./db/connect')
const cors = require('cors');

//middlewares
app.use(express.json())
app.use(cors());



const tasks = require('./routes/tasks')
app.use('/api/tasks', tasks)








const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        console.log("database connected")
        app.listen(port, () => {
            console.log(`Server listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()

