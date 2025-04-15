function print(value) {
    console.log(value)
}

const express = require('express') // CommonJS modules - same thing as import
const app = express()
const port = 3000

const person = {
    name: 'Adrian',
    age: 35
}

const posts = [
    {
        title: 'Post 1',
        body: 'Lorem ipsum dolor sit amet',
        isPublished: false
    },
    {
        title: 'Post 2',
        body: 'This is the body of post 2',
        isPublished: true
    },
]

// Python:
// @app.route('/') // default get
// def home():
//      return 'Hello World'
//
// app.[http-verb]([path], [callback])
// Callback receives a request and response object
// app.get('/', (req, res) => { // Calls app, declares a get route, passes in 2 objects - request, response
//     res.send('<h1>Hello there!</h1>') // Provides a callback function
// })

app.get('/', (req, res) => {
        res.send(person) // Express will automatically define content type as JSON
    })

// Post routes
// Get all posts
app.get('/posts', (req, res) => {
    res.send(posts)
})
// Get one post
// Create a new post
// Update a post
// Delete a post

app.listen(port, () => { // Starts up server by calling listen method
    print(`Example app listening on port ${port}`) // Callback is called when the server is running
})