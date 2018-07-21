import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div >
      <div style = {styles.headerStyle} className = 'd-flex flex-row-reverse' >
      <button className='m-2 btn btn-primary ' >  LOGIN </button> 
      <button  className='m-2 btn btn-primary '> SIGNUP </button> 
      </div>
        <div >{this.props.children}</div>
      </div>
    );
  }
}

const styles = {
  headerStyle: {
    paddingRight:'1%',
  }
}

export default App;
