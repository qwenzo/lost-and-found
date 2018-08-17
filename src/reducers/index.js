import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import userReducer from './userReducer';
const root_reducer = 
    combineReducers(
        {test:'',form:form,token:userReducer
    }
    )

export default root_reducer;