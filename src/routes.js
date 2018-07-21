import {Route , IndexRoute} from 'react-router';
import App from './components/App';
import React from 'react';
import Main from './components/mainPage/main'
const routes =  
    <Route path = "/" component= {App} >
    <IndexRoute component = {Main} />
    </Route>;


export default routes;