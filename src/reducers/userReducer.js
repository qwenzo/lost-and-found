import {LOGIN_TYPE,REGISTER_TYPE,AUTH_ERR,AUTH_USER , DEAUTH_USER ,AUTH_EMAIL_ERR , AUTH_PASSWORD_ERR , LOADING_REQ , FINISHING_REQ } from '../actions/types';
const INTIL_STATE = {}
export default function(state=INTIL_STATE,action) {
    switch(action.type){
       case AUTH_USER: return {...state,authnticated:true}
       case DEAUTH_USER: return {...state,authnticated:false}
       case LOGIN_TYPE:return {...state,token:action.payload}
       case REGISTER_TYPE:return {...state,newUser:action.payload}
       case AUTH_EMAIL_ERR : return {...state,emailError:action.payload}
       case AUTH_PASSWORD_ERR : return {...state,passwordError:action.payload}
       case LOADING_REQ : return {...state,loading:true}
       case FINISHING_REQ : return {...state,loading:false}
       default : return state
    }
}