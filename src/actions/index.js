import axios from 'axios';
import LogIn from '../components/LogIn';

export const LOGIN = 'LOGIN';
const URL = '';


export function LogIn(){
    return{
        type:LOGIN,
        payload:'test'
    }
}