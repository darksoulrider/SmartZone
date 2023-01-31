import catchAsyncError from "../middleware/CatchAsyncError.js"
import {UserModel} from "../models/userModel.js"


// Register controllers
export const RegisterController = catchAsyncError(async(req,res,next)=>{
    const {username,email,password} = req.body;
    res.json({
        success: true,
        email: email,
        password: password,
        username: username,
    })
    
})


// loign controllers
export const LoginController =catchAsyncError(async(req,res,next)=>{

    res.json({
        success:"Mack is me.."
    })
})


