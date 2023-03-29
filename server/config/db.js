const mongoose = require("mongoose")
const db = "mongodb+srv://Trishna:Qq8Td4ytgNc47qKN@cluster0.9ukcqjn.mongodb.net/books?retryWrites=true&w=majority"


const connectDB = async () => {
    try {
        mongoose.set("strictQuery", true)
        await mongoose.connect(db, {
            useNewUrlParser: true,
        })
    }
    catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectDB



