import React, { Component } from 'react';
import './App.css';
/*import Login from './Login';
import Model from './utils/Model';*/
import Header from './Header';

class App extends Component {
  constructor(){
    super();

    this.state = {
      login: false
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    this.setState({
      login: true
    });
  }

  render() {
    return (
      <Header onLogin = {this.handleLogin} />
      /*{this.state.login ? <Model content={<Login />} /> : null}*/
    );
  }
}

export default App;
