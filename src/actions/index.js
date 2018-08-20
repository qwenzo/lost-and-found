import axios from 'axios';

export const LOGIN_TYPE = 'LOGIN';
export const REGISTER_TYPE = 'LOGIN';
const BASE_URL = 'https://mylostfound.herokuapp.com/api';
const token = localStorage.getItem('token');



export function LogInUser(data){
    const URL = BASE_URL+'/auth/login';
    const req = axios.post(URL,data);
  
   
    return{
        type:LOGIN_TYPE,
        payload:req
    }
}

export function Register(data){
    const URL = BASE_URL+'/auth/register';
    const req = axios.post(URL,data);
  
   
    return{
        type:REGISTER_TYPE,
        payload:req
    }
}