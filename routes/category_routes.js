import { Router } from 'express'
import Category from '../models/category.js'

function print(value) {
    console.log(value)
}

// Default visibility of all module contents is private

// Flask: Blueprint
const router = Router()

// Category routes

// Get all categories
router.get('/', async (req, res) => {    
    res.send(await Category.find())
})

// Get one category
// 1. Declare the route
router.get('/:id', async (req, res) => {
    // 2. Get the ID of the category
    const category_id = req.params.id
    // 3. Get the category with the given ID
    const category = await Category.find({ _id: category_id })
    // 4. Send the category back to the client
    if (category) {
        res.send(category)
    } else {
        res.status(404).send({error:` Category with id ${category_id} does not exist.`})
    }
})

// Create a new category
router.post('/', async (req, res) => {
    try {
        // Get category data from request body
        const bodyData = req.body
        // Create and save a new Category instance
        const category = await Category.create(bodyData)
        // Send _ to client
        res.status(201).send(category)
    }
    catch(err) {
        // TODO: log to error file
        res.status(400).send({ error: err.message })
    }
 })

// Update a category
async function update(req, res) {
    // 1. Fetch the category from the db with the provided id, then update it with the contents of req.body
    let category = await Category.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'})
    if (category) {
        print(category)
        // 2. Send category to client with status
        await res.status(201).send(category)
    } else {
        res.status(404).send({ error: `Category with id ${req.params.id} not found.` })
    }
}

router.put('/:id', update)
router.patch('/:id', update)

// Delete a category
router.delete('/:id', async (req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id)
    if (category) {
        res.status(200).send(category)
    } else {
        res.status(404).send({ error: `Category with id ${req.params.id} not found.` })
    }
})


export default router