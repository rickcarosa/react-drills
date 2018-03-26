import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

class App extends Component {

  render() {
    return (
      <div className = "App">
      <Image myImage = {"https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg"} />
      </div>
      
    );
  }
}

export default App;
