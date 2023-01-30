export const CatchAsyncError  = (func) =>(err,req,res,next)=>{
    Promise.resolve(func(req,res,next)).catch(next);
}