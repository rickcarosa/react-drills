import React, {Component} from 'react';

class Login extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }

        this.loginUser = this.loginUser.bind(this);
    }

    handleUsernameChange(name){
        this.setState({
            username: name
        })
    }

    handlePasswordChange(pass){
        this.setState({
            password: pass
        })
    }

    loginUser(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    render(){
        return(
            <div className = "App">
            <input onChange = {(event) => this.handleUsernameChange(event.target.value)} type = 'text'/>
            <input onChange = {(event) => this.handlePasswordChange(event.target.value)} type = 'text'/>
            <button onClick = {this.loginUser} > Login </button>
            </div>
        )
    }
}

export default Login;