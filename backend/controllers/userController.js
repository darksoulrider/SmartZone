
import catchAsyncError from "../middleware/CatchAsyncError.js"


// Register controllers
export const RegisterController = catchAsyncError(async(req,res,next)=>{
    // const {username,email,password} = req.body;
    // res.json({
    //     success: true,
    //     email: email,
    //     password: password,
    //     username: username,
    // })
    
    res.json({mack:"love"})

})
// loign controllers
// export const LoginController = CatchAsyncError((req,res,next)=>{

//     res.json({
//         login:"loveing"
//     })
// })
export const LoginController =async(req,res,next)=>{

    res.json({
        login:"loveing"
    })
}


