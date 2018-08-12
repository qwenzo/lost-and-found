import React, { Component } from 'react';
import PropTypes  from 'prop-types';
import Button from './Button';
import InputField from './InputField';
class Header extends Component {

    static contextTypes ={
      router:PropTypes .object
    }
    // console.log(this.context.router.location.pathname);

    componentDidMount() {
        //  window.addEventListener('resize', this.resizeScreen.bind(this));
          if(document.documentElement.clientHeight>900) {
          //   document.getElementById("searchBoxHeader").classList+="m-5 w-25";
          }
          else{
           //   document.getElementById("searchBoxHeader").classList-="w-25";
          }
          
        
      }

    renderSearchBox(){
     return(
        <div id="searchBoxHeader" style={styles.searchBoxStyle} className="shadow-sm  w-25">
        <InputField element={
             <Button className='d-flex' style={{marginRight:'0.5rem '}} text='Search'/>
         } row='flex-row-reverse' height='40px'  type="text" className="d-flex " placeholder="Search a lost item"  />    
      </div>
     );
    }

  render() {
     const {router:{location:{pathname}}}=this.context;
    return (
        <div style = {styles.headerStyle} className=" align-items-center row d-flex">
        
        {pathname=="/" ? '' : this.renderSearchBox()}  
      <div className='d-flex flex-row-reverse col-sm'>
      <Button className='' text='LOGIN'/> 
      <Button  className=''  text='heeeeeeeeeeeey'/>
      <Button  className=' '  text='heeeeeeeeeeeey'/>
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
    
  }
 
}

/*
   <div>
           { this.renderSearchBox()}
        <div class="float-right">Float right on all viewport sizes</div>
      </div>
      */

export default Header;
