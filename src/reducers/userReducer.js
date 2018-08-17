import {LOGIN} from '../actions/index';

const INTIL_STATE = {token:''}
export default function(state=INTIL_STATE,action) {
    switch(action.type){
       case LOGIN:return {...state,token:action.payload}
       default : return state
    }
}