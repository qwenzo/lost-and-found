import axios from 'axios';

export const LOGIN_TYPE = 'LOGIN';
const MAIN_URL = 'https://mylostfound.herokuapp.com/api';



export function LogInUser(data){
    const URL = MAIN_URL+'/auth/login';
    const req = axios.post(URL,data);
  
   
    return{
        type:LOGIN_TYPE,
        payload:req
    }
}