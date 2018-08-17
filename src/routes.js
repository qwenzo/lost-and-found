import {Route , IndexRoute} from 'react-router';
import App from './components/App';
import React from 'react';
import Main from './components/mainPage/main';
import SearchView from './components/Search';
import SingleItem from './components/SingleItem';
import ItemForm from './components/ItemForm';
import LogIn from './components/LogIn'
const routes =  
    <Route path = "/" component= {App} >
    <IndexRoute component = {Main} />
    <Route path="/search" component={SearchView} />
    <Route path="/item" component={SingleItem} />
    <Route path="/item/post" component={ItemForm} />
    <Route path="/login" component={LogIn} />
    </Route>;


export default routes;