import {Route , IndexRoute} from 'react-router';
import App from './components/App';
import React from 'react';
import Main from './components/mainPage/main';
import SearchView from './components/Search';
const routes =  
    <Route path = "/" component= {App} >
    <IndexRoute component = {Main} />
    <Route path="/Search" component={SearchView} />
    </Route>;


export default routes;