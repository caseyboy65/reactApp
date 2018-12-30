import React, { Component } from 'react';
import './App.css';
/*import Login from './Login';
import Model from './utils/Model';*/
import Header from './Header';
import RightNav from './utils/RightNav'

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
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
