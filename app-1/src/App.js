import React, { Component } from 'react';
import Logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      message: ""
    }
  }


myFunction(value){
  this.setState({
    message: value
  })
}


render(){
  return(
    <div className = "App">
      <input 
      type = 'text'
      onChange = { (event) => this.myFunction(event.target.value) }
      />

    <p> {this.state.message} </p>
    </div>

  );
}
}

export default App;