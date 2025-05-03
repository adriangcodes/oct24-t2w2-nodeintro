import { expressjwt } from 'express-jwt'
import User from './models/user.js'

// Custom middleware
// next() is called when we want to hand off to the next piece of middleware
// We need to wrap the call to expressjwt() in a function because if we just
// make it a const, then expressjwt() will only be called once, which won't
// work for multiple requests, only the first one.
export function auth(req, res, next) {
    return expressjwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] })(req, res, next)
}

export function adminOnly(req, res, next) {
    if (req.auth) {
        User.findOne({ email: req.auth.email }).then(user => {
            if (user && user.isAdmin) {
                next()
            } else {
                res.status(403).send({error: 'Admin Only'})
            }
       })
    } else {
        res.status(403).send({error: 'Unauthorized'})
    }
}

export default { auth, adminOnly }