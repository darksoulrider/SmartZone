import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import path from "path"
import morgan from "morgan"
import helmet from "helmet"
import { fileURLToPath } from "url"
import multer from "multer"
// App configuration ....

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({path:"./config/.env"})


const app = express()
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({ limit:"30mb",extended:true}))
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("dev"))
app.use(cors({
    origin: "http://localhost:3000",
    credentials:true,
    methods:["GET", "POST", "PUT", "DELETE"],
}))
app.use("/assets",express.static(path.join(__dirname, "public/assets")))


// * STORAGE CONFIGURATION

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"public/assets");
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});

const upload = multer({storage:storage})
export {upload}


// --- Routing in app
import userRoutes from "./routes/userRoutes.js"
app.use("/api/v1",userRoutes)



// Inclued error Middlware here
import ErrorMiddleware from "./middleware/errorMiddleware.js"
app.use(ErrorMiddleware);

export default app;
