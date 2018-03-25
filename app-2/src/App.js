import React, {Component} from 'react';
import logo from './logo.svg';
import "./App.css";

class App extends Component{
  constructor(){
    super()
    this.state = {
      movies: ["Batman","Avengers", "X-Men"]
    }
  }

  render(){
      let superheroMovies = this.state.movies.map((element, index) => {
        return(
          <h2 key = {index}> {element} </h2>
        )
      })

    return(
      <div className = "App">
      {superheroMovies}
      </div>
    )
  }
}

export default App;