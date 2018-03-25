import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      food: ["pizza", "chips", "ice cream"]
    }
  }

  render(){
    let favoriteFoods = this.state.food.map((element, index) => {
      return(
        <h2 key = {index}> {element} </h2>
      )
    })

    return(
      <div className = "App">
        {favoriteFoods}
      </div>
    );
  }
}
export default App;