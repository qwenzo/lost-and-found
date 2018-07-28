import React, { Component } from 'react';
import PropTypes  from 'prop-types';
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
        <div id="searchBoxHeader" style={styles.searchBoxStyle} className="input-group float-right w-25 h-25 col-3">
        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
      </div>
     );
    }

  render() {
     const {router:{location:{pathname}}}=this.context;
    return (
        <div style = {styles.headerStyle} className="row rounded">
            {pathname=="/" ? '' : this.renderSearchBox()}      
      <div className = 'd-flex flex-row-reverse float-left col' >
      <button className='m-2 btn btn-primary ' >  LOGIN </button> 
      <button  className='m-2 btn btn-primary '> SIGNUP </button> 
     
      </div>
      </div>
    );
  }
}

const styles = {
  headerStyle: {
    border: '1px solid #eee',
    marginTop:'1%',
    marginLeft:'1%',
    marginRight:'1%'
  },
  searchBoxStyle:{
      marginLeft:'1%',
      marginTop:'8px'

  }
}

/*
   <div>
           { this.renderSearchBox()}
        <div class="float-right">Float right on all viewport sizes</div>
      </div>
      */

export default Header;
