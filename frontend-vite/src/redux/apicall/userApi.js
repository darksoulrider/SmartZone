import {
    LoginStart,LoginFailed,LoginSuccess,
    registerStart, registerFailed, registerSuccess,

} from "../slices/userSlice"
import axios from "axios"
import {BASE_URL} from "../Store"
export const  loginReq =(username, password)=> async(dispatch)  =>{
    try{
        dispatch(LoginStart())
        const response = await axios.post(`${BASE_URL}/api/v1/login`,{username,password},
        {
            headers:{
                "Content-Type":"application/json",
            },
            withCredentials:true,
        });
        dispatch(LoginSuccess(response.data))
    }catch(err){
        dispatch(LoginFailed(err.response.data))
    }
}

export const signupReq = ({username,password,CP_password,email}) => async(dispatch)=>{
    console.log(`username: ${username}, \npassword: ${password}, \nemail: ${email} , \npassword: ${CP_password}`);

    try{
        dispatch(registerStart());
        const response = await axios.post(`${BASE_URL}/api/v1/register`,{username,password,email,CP_password},
        {
            headers:{
                "Content-Type":"application/json",
            },
            withCredentials:true,
        });
        dispatch(registerSuccess(response.data));
    }catch(err){
        console.log(`error: ${err.response.data}`);
        dispatch(registerFailed(err.response.data))
    }
}