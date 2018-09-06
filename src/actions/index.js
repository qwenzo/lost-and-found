import axios from 'axios';
import {LOGIN_TYPE,AUTH_USER,AUTH_PASSWORD_ERR,AUTH_EMAIL_ERR , LOADING_REQ , FINISHING_REQ} from './types';
import {REGISTER_TYPE} from './types';
import {browserHistory} from 'react-router';


const BASE_URL = 'https://mylostfound.herokuapp.com/api';
const token = localStorage.getItem('token');



export function LogInUser(data){
    const URL = BASE_URL+'/auth/login';
    const req = axios.post(URL,data);
    return (dispatch) =>{
        dispatch({type:LOADING_REQ})
        req.then(
            (res)=>{
                localStorage.setItem('token', res.data.access_token);
                browserHistory.push('/');
                 dispatch({type:AUTH_USER});

            }
        ).catch((res)=>{
            
           let  errors = res.response.data.errors;
           console.log(errors);
            if(errors.email){
                dispatch({type:AUTH_EMAIL_ERR,payload:errors.email})
            }
            if(errors.password){
                dispatch({type:AUTH_PASSWORD_ERR,payload:errors.password})
            }
        }).then(()=>{
            dispatch({type:FINISHING_REQ})
        })
    }
   /*  return{
        type:LOGIN_TYPE,
        payload:req
    } */
}

export function Register(data){
    const URL = BASE_URL+'/auth/register';
    const req = axios.post(URL,data);
  
   
    return{
        type:REGISTER_TYPE,
        payload:req
    }
}