import axios from 'axios';

export const LOGIN_TYPE = 'LOGIN';
const URL = '';


export function LogInUser(data){
    console.log(data);
    return{
        type:LOGIN_TYPE,
        payload:'test'
    }
}