import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div style = {styles.headerStyle} className = 'd-flex flex-row-reverse' >
      <button className='m-2 btn btn-primary ' >  LOGIN </button> 
      <button  className='m-2 btn btn-primary '> SIGNUP </button> 
      </div>

    );
  }
}

const styles = {
  headerStyle: {
    paddingRight:'1%',
  }
}

export default Header;
