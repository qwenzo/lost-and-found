import React, { Component } from 'react';
import Header from './Header';
import isAuth from '../index';
class App extends Component {
  state = {loggedin:false};

  isloggedin = () =>{
    isAuth() ?  this.setState({loggedin:true}):this.setState({loggedin:false})
  }

  componentWillMount(){
    this.isloggedin();
  }

  render() {
    return (
      <div >
           <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <Header  />
        <div style={styles.backgroundStyle} >{this.props.children}</div>
      </div>
    );
  }
}

const styles = {
    containerStyle:{
     
    }
}

export default App;
