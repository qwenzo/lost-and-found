import {Route , IndexRoute , Redirect,browserHistory} from 'react-router';
import App from './components/App';
import React from 'react';
import Main from './components/mainPage/main';
import SearchView from './components/Search';
import SingleItem from './components/SingleItem';
import ItemForm from './components/ItemForm';
import LogIn from './components/LogIn';
import isAth from '../src/index'

function requireAuth(e) {
     if (isAth()) {
        browserHistory.push("/");
    
    } 
  }
const routes =  
    <Route path = "/" component= {App} >
    <IndexRoute component = {Main} />
    <Route path="/search" component={SearchView} />
    <Route path="/item" component={SingleItem} />
    <Route path="/item/post" component={ItemForm} />
    <Route path="/login" component={LogIn} onEnter={(e)=>{requireAuth(e)}}  />
    </Route>;


export default routes;