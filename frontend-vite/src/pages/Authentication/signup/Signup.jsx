import React from 'react';
import * as styled from "./signup.styled"
import {yupResolver} from "@hookform/resolvers/yup"
import {SignupValidatinSchema} from "../../../utils/yupValidation"
import {useForm} from "react-hook-form"
import { useDispatch } from 'react-redux';
import { signupReq } from '../../../redux/apicall/userApi';
import { useNavigate } from 'react-router-dom';

const Signup = ()=>{
    const dispatch = useDispatch();
    const nevigate = useNavigate();
    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver:yupResolver(SignupValidatinSchema),
    });

    const mySubmit = (data)=>{
        dispatch(signupReq(data));
    }    

    return(
        <styled.Container>
            <styled.Form onSubmit={handleSubmit(mySubmit)}>
                <styled.Left>
                <h1>SmartZone</h1>
                <input 
                    type="email" 
                    autoCorrect='false' 
                    placeholder='Enter your email'
                    {...register("email")}
                />
                {(errors.email && <p className="error">{errors.email.message}</p>)}
                <input 
                    type="text" 
                    autoCorrect='false' 
                    placeholder='Enter your Username'
                    {...register("username")}
                />
                {(errors.username && <p className="error">{errors.username.message}</p>)}
                <input 
                    type="password" 
                    autoCorrect='false' 
                    autoComplete='off'
                    placeholder='Enter your Password'
                    {...register("password")}
                />
                {(errors.password && <p className="error">{errors.password.message}</p>)}
                <input 
                    type="password" 
                    autoCorrect='false' 
                    autoComplete='off'
                    placeholder='Re-enter Password'
                    {...register("CP_password")}
                />
                {(errors.CP_password && <p className="error">{errors.CP_password.message}</p>)}
                <button type='submit'>Sign-up</button>
                <div className="infos">
                    <p className='one'>have an accont?
                    <span onClick={()=>nevigate("/login")}>Login</span>
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

export default Signup;
