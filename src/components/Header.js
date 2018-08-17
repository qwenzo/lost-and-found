import React, { Component } from 'react';
import PropTypes  from 'prop-types';
import Button from './Button';
import InputField from './InputField';
class Header extends Component {

    static contextTypes ={
      router:PropTypes.object
    }
    // console.log(this.context.router.location.pathname);

    componentDidMount() {
        //  window.addEventListener('resize', this.resizeScreen.bind(this));
          if(document.documentElement.clientHeight>900) {
           // document.getElementById("searchBoxHeader").classList+="w-25";
          }
          else{
              document.getElementById("searchBoxHeader").classList+="w-100";
          }
          
        
      }

    renderSearchBox(){
     return(
        <div id="searchBoxHeader" style={styles.searchBoxStyle} className="shadow-sm  w-25">
        <InputField style={{ border: '1px solid #ddd'}} className='shadow-sm' element={
             <Button className='d-flex' style={{marginRight:'0.5rem '}} text='Search'/>
         } row='flex-row' height='40px'  type="text" className="d-flex " placeholder="Search a lost item"  />    
      </div>
     );
    }

  render() {
     const {router:{location:{pathname}}}=this.context;
    return (
        <div style = {styles.headerStyle} className=" align-items-center  d-flex flex-row">
        
        {pathname=="/" ? '' : this.renderSearchBox()}  
      <div style={styles.buttonsBoxContainer} className='d-flex flex-row-reverse col-sm'>
      <Button style={styles.buttonsStyle} className='m-2' text='LOGIN'/> 
      <Button style={styles.buttonsStyle} className='m-2'  text='SIGNUP'/>
      </div>  
      </div>
    );
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
      marginLeft:'2%'
    },
    buttonsBoxContainer:{
      marginRight:'1%',
    
    },
    buttonsStyle:{
    margin:'5% !important'
    }
 
}

/*
   <div>
           { this.renderSearchBox()}
        <div class="float-right">Float right on all viewport sizes</div>
      </div>
      */

export default Header;
