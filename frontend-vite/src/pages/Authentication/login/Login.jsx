import React from 'react';
import * as styled from "./Login.styled"
import {yupResolver} from "@hookform/resolvers/yup"
import {LoginValidationSchema} from "../../../utils/yupValidation"
import {useForm} from "react-hook-form"
import { useDispatch } from 'react-redux';
import { loginReq } from '../../../redux/apicall/userApi';
import { useNavigate } from 'react-router-dom';

const Login = ()=>{
    const dispatch = useDispatch();
    const nevigate = useNavigate();
    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver:yupResolver(LoginValidationSchema),
    });

    const mySubmit = (data)=>{
        dispatch(loginReq(data.username,data.password));
    }    

    return(
        <styled.Container>
            <styled.Form onSubmit={handleSubmit(mySubmit)}>
                <styled.Left>
                <h1>SmartZone</h1>
                <input 
                    type="text" 
                    autoCorrect='false' 
                    placeholder='Username..'
                    {...register("username")}
                />
                {(errors.username && <p className="error">{errors.username.message}</p>)}
                <input 
                    type="password" 
                    autoCorrect='false' 
                    autoComplete='off'
                    placeholder='Password..'
                    {...register("password")}
                />
                {(errors.password && <p className="error">{errors.password.message}</p>)}
                <button type='submit'>Login</button>
                <div className="infos">
                    <p className='one'>Don't have an accont?
                    <span onClick={()=>nevigate("/signup")}>Register</span>
                    </p>
                    <p className='two'>Forget Password?</p>
                </div>
                <div className="otherLogin">
                    {/* <Facboook/>
                    <Google/> */}
                </div>
                </styled.Left>
            <styled.Right><h1>lvoe method</h1></styled.Right>
            </styled.Form>
        </styled.Container>
    );
}

export default Login;
