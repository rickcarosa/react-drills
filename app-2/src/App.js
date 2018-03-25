import React, {Component} from 'react';
import Logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
       teams: ["Yankees", "Bills", "Sabres"]
    }
  }




  render() {

    let favoriteTeams = this.state.teams.map((element, index) => {
      return(
        <h2 key = {index}> {element} </h2> 
      )
    })

    return (
      <div className = "App">
        {favoriteTeams}
      </div>
    
    );
  }
}

export default App;
