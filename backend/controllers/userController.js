import catchAsyncError from "../middleware/CatchAsyncError.js"
import {UserModel} from "../models/userModel.js"
import ErrorHandler from "../utils/ErrorHandler.js";
import sendToken from "../utils/sendToken.js";


// Register controllers
export const RegisterController = catchAsyncError(async(req,res,next)=>{

    const {username,email,password} = req.body;
    if(!username,!email,!password) return next(new ErrorHandler("Please enter all fields", 404));
    let user = await UserModel.findOne({username: username});
    if(user) return next(new ErrorHandler("User already Exists..",401));
    
    user = await UserModel.create({username: username, email: email,password: password});
    sendToken(res,user,"User Successfully registered..",200);
    
})


// loign controllers
export const LoginController =catchAsyncError(async(req,res,next)=>{
    const {username,password} = req.body;
    if (!username || !password) {
        return next(new ErrorHandler("Please Enter all field..", 400));
    }
    const user = await UserModel.findOne({username: username}).select("+password")
    if(!user){return next(new ErrorHandler("Username or password is incorrect",200))}

    const isMatch= user.comparePassword(password)
    if(!isMatch){
        return next(new ErrorHandler("Username or password is incorrect",404))
    }
    sendToken(res,user,"Successfully loged in..",200);

})


