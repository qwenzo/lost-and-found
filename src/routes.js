import {Route , IndexRoute} from 'react-router';
import App from './components/App';
import React from 'react';
const routes =  
    <Route path = "/" component= {App} >
    <IndexRoute  />
    </Route>;


export default routes;