import { model } from 'mongoose'

// Flask: ORM (Object-Relational Mapper - SQLAlchemy) - defined models
// Express: ODM (Object-Document Mapper - Mongoose)
const Post = model('Post', {
    title: String,
    body: String,
    isPublished: Boolean
})

export default Post