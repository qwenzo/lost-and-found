import React, { Component } from 'react';
import Header from './Header';
class App extends Component {

  render() {
    return (
      <div >
        <Header />
        <div >{this.props.children}</div>
      </div>
    );
  }
}

const styles = {
 
}

export default App;
