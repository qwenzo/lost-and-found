import React, { Component } from 'react';
import PropTypes  from 'prop-types';
import Button from './Button';
import InputField from './InputField';
import isAuth from '../index';
import {Link} from 'react-router';
import searchIcon from '../assets/Orion_search.png'
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
        <InputField  style={styles.searchBoxStyle} className='shadow-sm' element={
          <div className=" align-items-center justify-content-center d-flex shadow-sm" style={{borderRadius: '50%',width:'30px',height:'30px'}}>
          <img width="24px" height="24px" style={{}} src={searchIcon} /></div>
         } row='flex-row' height='40px'  type="text" placeholder="Search a lost item"  />    
     );
    }

    redirectLogin = () =>{
      this.context.router.push('/login');
    }

    redirectSignup = () =>{
      this.context.router.push('/signup');
    }

  render() {
     const {router:{location:{pathname}}}=this.context;
    return (
      <div style = {styles.headerStyle} className=" align-items-center  d-flex flex-row">
        {pathname=="/" ? '' : this.renderSearchBox()}  
          {!isAuth()?
          <div style={styles.buttonsBoxContainer} className='d-flex flex-row-reverse col-sm'>
            <Button onClick={this.redirectLogin} clickable={true} hasborder={true} style={styles.buttonsStyle} className='' text='LOGIN'/>
            <Button onClick={this.redirectSignup} clickable={true} hasborder={true} style={styles.buttonsStyle} className=''  text='SIGNUP'/>
          </div>:
           <div style={styles.buttonsBoxContainer} className='d-flex flex-row-reverse col-sm'>
          <Button onClick={this.logout} clickable={true} hasborder={true} style={styles.buttonsStyle} className='' text='LOGOUT'/></div> }  
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
      marginLeft:'1%',
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
