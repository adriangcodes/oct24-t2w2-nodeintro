import { model, ObjectId } from 'mongoose'

// Flask: ORM (Object-Relational Mapper - SQLAlchemy) - defined models
// Express: ODM (Object-Document Mapper - Mongoose)
const Post = model('Post', {
    title: { type: String, required: [true, 'Title is required.'] },
    body: { type: String, required: [true, 'Body is required.'] },
    isPublished: { type: Boolean, default: false },
    // Reference or "ref" field (analogous to a foreign key in a relational db)
    category: { type: ObjectId, ref: 'Category', required: true }
})

export default Post