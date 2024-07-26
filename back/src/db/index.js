const mongoose = require("mongoose")
const DATABASE_NAME = require("../constant")

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DATABASE_NAME}`)
        console.log(`\nMongoDB connected !! DB HOST : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("name" , DATABASE_NAME)
        console.log("url" , process.env.MONGO_URL);
        console.log("MONGODB not connected error", error)
        process.exit(1)
    }
}

module.exports = connectDB