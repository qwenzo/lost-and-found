import {LOGIN_TYPE} from '../actions/index';
const INTIL_STATE = {token:''}

export default function(state=INTIL_STATE,action) {
    switch(action.type){
       case LOGIN_TYPE:return {...state,token:action.payload}
       default : return state
    }
}