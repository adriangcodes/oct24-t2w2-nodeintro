function print(value) {
    console.log(value)
}

// const express = require('express') // CommonJS modules - same thing as import
import express from 'express' // ES6 modules - requires "type": "module" to be added to package.json
// Import can be named anything as default exports are anonymous by default
import post_routes from './routes/post_routes.js'

const app = express()
const port = 3000

// Attach router to application
// Python: app.register_blueprint(post_routes)
app.use(post_routes)

app.listen(port, () => { // Starts up server by calling listen method
    print(`Example app listening on port ${port}`) // Callback is called when the server is running
})