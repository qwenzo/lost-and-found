import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';
const root_reducer = () => {
    combineReducers(
        {test:'',form:reduxForm
    }
    )
}

export default root_reducer;