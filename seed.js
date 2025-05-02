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

// Connect to DB
db.connect()

// Erase collection
await Category.deleteMany()
print('Categories erased.')
// Creates and saves to MongoDB a new Post for each document in posts
const cats = await Category.create(categories)
print('Categories created.')

// At this point, categories have been inserted into the db and each assigned an ObjectId

const posts = [
    {
        title: 'Post 1',
        body: 'Lorem ipsum dolor sit amet',
        isPublished: true,
        category: cats[1]
    },
    {
        title: 'Post 2',
        body: 'This is the body of post 2',
        isPublished: false,
        category: cats[3]
    },
    {
        title: 'Post 3',
        body: 'This is the body of post 3 to highlight isPublished',
        isPublished: true,
        category: cats[2]
    }
]

// Erase collection
await Post.deleteMany()
print('Posts erased.')
// Creates and saves to MongoDB a new Post for each document in posts
// Before we do the next statement, we need to assign a category to each post, otherwise it will fail with a validation error, since category is required.
// posts[0].category = await Category.findOne({name: 'Coding'})
// posts[1].category = await Category.findOne({name: 'Other'})

await Post.create(posts)
print('Posts created.')

// We still have a db connection open, so the script won't end
db.disconnect()