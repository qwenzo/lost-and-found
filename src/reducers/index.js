import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
const root_reducer = 
    combineReducers(
        {test:'',form:form
    }
    )

export default root_reducer;