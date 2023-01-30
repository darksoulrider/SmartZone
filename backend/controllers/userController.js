
import { CatchAsyncError } from "../middleware/CatchAsyncError.js"


// Register controllers
export const RegisterController = CatchAsyncError((req,res,next)=>{
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
export const LoginController =(req,res,next)=>{

    res.json({
        login:"loveing"
    })
}


