function print(value) {
    console.log(value)
}

// const express = require('express') // CommonJS modules - same thing as import
import express from 'express' // ES6 modules - requires "type": "module" to be added to package.json
import cors from 'cors'
import helmet from 'helmet'
// Internal import can be named anything as default exports are anonymous by default
import post_routes from './routes/post_routes.js'
import category_routes from './routes/category_routes.js'
import auth_routes from './routes/auth_routes.js'
import db from './db.js'

const app = express()
const port = 3000

// Generally, security related middleware should happen as early as possible
app.use(helmet())
app.use(cors())

// Insert middleware to parse a JSON body
app.use(express.json())

// Attach router to application
// Python: app.register_blueprint(post_routes)
// app.use inserts middleware into the request-response cycle
app.use(auth_routes)
app.use('/posts', post_routes)
app.use('/categories', category_routes)

app.use((req, res) => {
    res.status(404).send(`No route matched: ${req.method} ${req.url}`)
})

app.listen(port, async () => { // Starts up server by calling listen method
    print(`Example app listening on port ${port}.`) // Callback is called when the server is running
    db.connect()
})