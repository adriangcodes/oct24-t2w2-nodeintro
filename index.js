function print(value) {
    console.log(value)
}

const express = require('express') // CommonJS modules - same thing as import
const app = express()
const port = 3000

// Python:
// @app.route('/') // default get
// def home():
//      return 'Hello World'
//
// app.[http-verb]([path], [callback])
// Callback receives a request and response object
app.get('/', (req, res) => { // Calls app, declares a get route, passes in 2 objects - request, response
    res.send('Hello there!') // Provides a callback function
})

app.listen(port, () => { // Starts up server by calling listen method
    print(`Example app listening on port ${port}`) // Callback is called when the server is running
})