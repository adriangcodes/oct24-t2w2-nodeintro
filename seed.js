// import { connect, disconnect } from './db.js'
import db from "./db.js"
import Category from "./models/category.js"
import Post from "./models/post.js"

function print(value) {
    console.log(value)
}

const categories = [
    { name: 'Food' },
    { name: 'Coding' },
    { name: 'Movies' },
    { name: 'Other' }
]

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

// Connect to DB
db.connect()

// Erase collection
await Category.deleteMany()
print('Categories erased.')
// Creates and saves to MongoDB a new Post for each document in posts
await Category.create(categories)
print('Categories created.')

// Erase collection
await Post.deleteMany()
print('Posts erased.')
// Creates and saves to MongoDB a new Post for each document in posts
await Post.create(posts)
print('Posts created.')

// We still have a db connection open, so the script won't end
db.disconnect()