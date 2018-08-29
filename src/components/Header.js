import React, { Component } from 'react';
import PropTypes  from 'prop-types';
import Button from './Button';
import InputField from './InputField';
import isAuth from '../index';
import {Link} from 'react-router';
class Header extends Component {
    state = {loggedin:false};
    static contextTypes ={
      router:PropTypes.object
    }
    // console.log(this.context.router.location.pathname);

    componentWillMount(){
     isAuth() ?  this.setState({loggedin:true}):this.setState({loggedin:false})
    }
    componentDidMount() {
        //  window.addEventListener('resize', this.resizeScreen.bind(this));
          if(document.documentElement.clientHeight>900) {
           // document.getElementById("searchBoxHeader").classList+="w-25";
          }
          else{
            //  document.getElementById("searchBoxHeader").classList+="w-100";
          }
          
        
      }


    renderSearchBox(){
     return(
        <div id="searchBoxHeader" style={styles.searchBoxStyle} className="shadow-sm ">
        <InputField style={{ border: '1px solid #ddd'}} className='shadow-sm' element={
             <Button hasborder={true} clickable={true} className='d-flex' style={{border: '1px solid #eee'}} text='Search'/>
         } row='flex-row' height='40px'  type="text" className="d-flex " placeholder="Search a lost item"  />    
      </div>
     );
    }

  render() {
     const {router:{location:{pathname}}}=this.context;
    return (
        <div style = {styles.headerStyle} className=" align-items-center  d-flex flex-row">
        
        {pathname=="/" ? '' : this.renderSearchBox()}  
      {!isAuth()?<div style={styles.buttonsBoxContainer} className='d-flex flex-row-reverse col-sm'>
     <Link to="/login"> <Button clickable={true} hasborder={true} style={styles.buttonsStyle} className='' text='LOGIN'/> </Link>
      <Button clickable={true} hasborder={true} style={styles.buttonsStyle} className=''  text='SIGNUP'/>
      </div>: <div style={styles.buttonsBoxContainer} className='d-flex flex-row-reverse col-sm'>
      <Button onClick={this.logout} clickable={true} hasborder={true} style={styles.buttonsStyle} className='' text='LOGOUT'/>
      </div> }  
      </div>
    );
  }

  logout = () =>{
    localStorage.clear();
    this.setState({loggedin:false});
  }
}

const styles = {
    headerStyle: {
      border: '1px solid #eee',
      backgroundColor:'#FFFF',
      paddingTop:'0.5%',
      paddingBottom:'0.5%',
    
    },
    searchBoxStyle:{
      marginLeft:'2%',
      width:'25%',
      minWidth:'190px'
    },
    buttonsBoxContainer:{
      marginRight:'1%',
    
    },
    buttonsStyle:{
    margin:'5% !important',
    }
 
}

/*
   <div>
           { this.renderSearchBox()}
        <div class="float-right">Float right on all viewport sizes</div>
      </div>
      */

export default Header;
