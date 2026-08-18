import mongoose from "mongoose"

const connectDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://yusimamipu_db_user:poohchichi3@cluster0.ubvhpsz.mongodb.net/nextAppDatabase?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Success: Connected to MongoDB")
    }catch{
        console.log("Failure: UnConnected to MongoDB")
        throw new Error()
    }
}

export default connectDB
