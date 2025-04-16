function print(value) {
    console.log(value)
}

// const express = require('express') // CommonJS modules - same thing as import
import express from 'express' // ES6 modules - requires "type": "module" to be added to package.json
import mongoose from 'mongoose'
// Internal import can be named anything as default exports are anonymous by default
import post_routes from './routes/post_routes.js'

const app = express()
const port = 3000

// Insert middleware to parse a JSON body
app.use(express.json())

// Attach router to application
// Python: app.register_blueprint(post_routes)
// app.use inserts middleware into the request-response cycle
app.use(post_routes)

app.listen(port, async () => { // Starts up server by calling listen method
    print(`Example app listening on port ${port}.`) // Callback is called when the server is running
    // Connect to MongoDB
    await mongoose.connect('mongodb://127.0.0.1:27017/nodeintro_db') // DB connection string
    print(mongoose.connection.readyState == 1 ? 'Mongoose connected.' : 'Mongoose failed to connect!') // Ternary operator
})