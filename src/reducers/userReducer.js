import {LOGIN_TYPE,REGISTER_TYPE} from '../actions/index';
const INTIL_STATE = {token:'',newUser:{}}

export default function(state=INTIL_STATE,action) {
    switch(action.type){
       case LOGIN_TYPE:return {...state,token:action.payload}
       case REGISTER_TYPE:return {...state,newUser:action.payload}
       default : return state
    }
}