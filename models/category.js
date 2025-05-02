import { model } from 'mongoose'

// Flask: ORM (Object-Relational Mapper - SQLAlchemy) - defined models
// Express: ODM (Object-Document Mapper - Mongoose)
const Category = model('Category', {
    name: { type: String, required: [true, 'Name is required.'] },
    description: { type: String, required: false },
    isPublished: { type: Boolean, default: false }
})

export default Category