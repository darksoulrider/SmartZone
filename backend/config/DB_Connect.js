import mongoose from "mongoose";

const URL = process.env.MONGODB_URL

const connectDB = async()=>{
    try{
        mongoose.set('strictQuery', true)
        const connection = await mongoose.connect(URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    }catch(e){
        console.log(`Error connecting to Database...\nError:${e.message}`);
    }
}

export default connectDB;