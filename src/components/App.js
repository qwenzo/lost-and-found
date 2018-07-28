import React, { Component } from 'react';
import Header from './Header';
class App extends Component {

  render() {
    return (
      <div >
        <Header />
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
