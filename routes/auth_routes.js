import { Router } from "express"
import bcrypt from 'bcrypt'
import User from "../models/user.js"

const router = Router()

// Register a new user
// Possibly protect route to only admin can do it
router.post('/register', async (req, res) => {
    try {
        // Get post data from the request body
        const bodyData = req.body
        // Create and save new User instance
        const user = await User.create({
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10)
        })
        // Send user to the client with 201 status
        // Note: only sending email, password does not get sent outside of the db
        res.status(201).send({ email: user.email })
    }
    catch(err) {
        // TODO: Log to error file
        res.status(400).send({ error: err.message })
    }
})

// Login
router.post('/login', (req, res) => {
    res.send({ route: 'POST /login' })
})

export default router