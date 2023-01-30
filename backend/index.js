import app from "./app.js";
import connectDB from "./config/DB_Connect.js";
import cloudinary from "cloudinary"

// remeber to implement socket programming at teh end..


// connect database
connectDB();


// cloudinary setups -
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});


// starting the server code..
const PORT = process.env.PORT || 9001
app.listen(PORT,()=>{
    console.log(`Server started listening on: http://localhost:${PORT}`)
});