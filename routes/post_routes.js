// import express from 'express' // Imports the default export
import { Router } from 'express' // Destructures Router from within express module
import Post from '../models/post.js'

function print(value) {
    console.log(value)
}

// Default visibility of all module contents is private

// const person = {
//     name: 'Adrian',
//     age: 35
// }

// Flask: Blueprint
const router = Router()

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

// // Get person
// router.get('/', (req, res) => {
//     res.send(person) // Express will automatically define content type as JSON
// })

// Post routes

// Get all posts
router.get('/', async (req, res) => {    
    // res.send(posts)
    res.send(
        await Post
            // find argument is selective with a ternary
            // If req.query.draft is truthy, pass an empty filter (i.e. {})
            // Else filter to include only published posts
            .find(req.query.draft ? {} : { isPublished: true })
            // .populate will backpopulate category info with entire document rather than just id
            .populate({
                path: 'category',
                select: '-__v -_id' // removes version and id from document
            })
            .select('-__v') // removes version from document
    )
})

// Get one post
// 1. Declare the route
// Python: @app.route('/posts/<int:id>')
router.get('/:id', async (req, res) => {
    // 2. Get the ID of the post
    const post_id = req.params.id
    // 3. Get the post with the given ID
    const post = await Post.find({ _id: post_id }).populate('category') // posts.find(p => p.id == post_id) // Using == means type coercion will happen
    // 4. Send the post back to the client
    if (post) {
        res.send(post)
    } else {
        // Flask/Python: return {}, 404
        res.status(404).send({error:` Post with id ${post_id} does not exist.`})
    }
})

// Create a new post
router.post('/', async (req, res) => {
    try {
        // Get post data from request body
        const bodyData = req.body
        // Create and save a new Post instance
        // const post = new Post(bodyData)
        const post = await Post.create(bodyData)
        // Commit new Post instance to DB
        // post.save()
        // Send _ to client
        res.status(201).send(post)
    }
    catch(err) {
        // TODO: log to error file
        res.status(400).send({ error: err.message })
    }
 })

// Update a post
async function update(req, res) {
    // 1. Fetch the post from the db with the provided id, then update it with the contents of req.body
    let post = await Post.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'})
    if (post) {
        print(post)
        // 2. Send post to client with status
        await res.status(201).send(post)
    } else {
        res.status(404).send({ error: `Post with id ${req.params.id} not found.` })
    }
}

router.put('/:id', update)
router.patch('/:id', update)

// Delete a post
router.delete('/:id', async (req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id)
    if (post) {
        res.status(200).send(post)
    } else {
        res.status(404).send({ error: `Post with id ${req.params.id} not found.` })
    }
})

// One default export allowed per module
// Default export is anonymous
export default router // Need to allow exports to import into other files