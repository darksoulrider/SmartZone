class ErrorHandler extends Error{
    ErrorHandler(message,statuscode){
        super(message);
        this.statuscode = statuscode;
    }
}

export default ErrorHandler;