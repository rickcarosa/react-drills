import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      emptyString: '',
      teams: ["Bills", "Sabres", "Yankees", "Bulls"]
    }
  }

  handleChange(filter){
    this.setState({
      emptyString: filter
    })
  }

  render(){

    let teamsToDisplay = this.state.teams.filter((element, index) => {
      return element.includes(this.state.emptyString);
    }).map((element,index) => {
      return <h2 key = {index}>{element} </h2>
    })
    return(
      <div className = "App" >

      <input 
      type = "text"
      onChange = { (event) => this.handleChange(event.target.value)}
      />
      {teamsToDisplay}
      </div>

    )
  }


}

export default App;