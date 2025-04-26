import { model } from 'mongoose'

// Flask: ORM (Object-Relational Mapper - SQLAlchemy) - defined models
// Express: ODM (Object-Document Mapper - Mongoose)
const Post = model('Post', {
    title: { type: String, required: [true, 'Title is required.'] },
    body: { type: String, required: [true, 'Body is required.'] },
    isPublished: { type: Boolean, default: false }
})

export default Post