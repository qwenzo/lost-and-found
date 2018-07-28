import {Route , IndexRoute} from 'react-router';
import App from './components/App';
import React from 'react';
import Main from './components/mainPage/main';
import SearchView from './components/Search';
import SingleItem from './components/SingleItem';
import ItemForm from './components/ItemForm';
const routes =  
    <Route path = "/" component= {App} >
    <IndexRoute component = {Main} />
    <Route path="/search" component={SearchView} />
    <Route path="/item" component={SingleItem} />
    <Route path="/submitItem" component={ItemForm} />
    </Route>;


export default routes;