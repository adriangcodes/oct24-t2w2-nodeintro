import express from 'express'

function print(value) {
    console.log(value)
}

// Default visibility of all module contents is private

const person = {
    name: 'Adrian',
    age: 35
}

const posts = [
    {
        id: 1,
        title: 'Post 1',
        body: 'Lorem ipsum dolor sit amet',
        isPublished: false
    },
    {
        id: 2,
        title: 'Post 2',
        body: 'This is the body of post 2',
        isPublished: true
    },
]

// Flask: Blueprint
const router = express.Router()

// Python/Flask:
// @app.route('/') // default get
// def home():
//      return 'Hello World'
//
// app.[http-verb]([path], [callback])
// Callback receives a request and response object
// router.get('/', (req, res) => { // Calls app, declares a get route, passes in 2 objects - request, response
//     res.send('<h1>Hello there!</h1>') // Provides a callback function
// })

router.get('/', (req, res) => {
    res.send(person) // Express will automatically define content type as JSON
})

// Post routes

// Get all posts
router.get('/posts', (req, res) => {
res.send(posts)
})

// Get one post
// 1. Declare the route
// Python: @app.route('/posts/<int:id>')
router.get('/posts/:id', (req, res) => {
// 2. Get the ID of the post
const post_id = req.params.id
// 3. Get the post with the given ID
const post = posts.find(p => p.id == post_id) // Using == means type coercion will happen
// 4. Send the post back to the client
if (post) {
    res.send(post)
} else {
    // Flask/Python: return {}, 404
    res.status(404).send({error:` Post with id ${post_id} does not exist.`})
}
})

// Create a new post

// Update a post

// Delete a post

// One default export allowed per module
// Default export is anonymous
export default router // Need to allow exports to import into other files