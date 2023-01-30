const ErrorMiddleware = (err,req,res,next)=>{

    err.message = err.message || "Something went wrong";
    err.statuscode = err.statuscode || 500;


    res.status(err.statuscode).json({
        message:err.message,
        success:false,
    })

}

export default ErrorMiddleware;