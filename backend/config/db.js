import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.Mongo_URI)
        console.log(`mongodb connected ${conn.connection.host}`)
        
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }

}

export default connectDB