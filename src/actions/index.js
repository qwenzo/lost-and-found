import axios from 'axios';
import LogIn from '../components/LogIn';

export const LOGIN = 'LOGIN';
const URL = '';


export function LogIn(data){
    return{
        type:LOGIN,
        payload:'test'
    }
}