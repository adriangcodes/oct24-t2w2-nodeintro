import mongoose from 'mongoose'

function print(value) {
    console.log(value)
}

// Connect to MongoDB
async function connect() {
    await mongoose.connect('mongodb://127.0.0.1:27017/nodeintro_db') // DB connection string
    print(mongoose.connection.readyState == 1 ? 'Mongoose connected.' : 'Mongoose failed to connect!') // Ternary operator    
}

// Named export
// JS will automatically export it wrapped in an object
// { close: close }
// ... where the value is the function itself
async function disconnect() {
    await mongoose.disconnect()
    print(mongoose.connection.readyState == 0 ? 'Mongoose disconnected.' : 'Mongoose failed to disconnect!') // Ternary operator
}

// Best practice export
export default { connect, disconnect }