import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import Model from './utils/Model';
import Body from './Body';
import ItemList from './ItemList';

class App extends Component {
  constructor(){
    super();

    this.state = {
      pageToShow: "home",
      showNav: false
    };

    this.navigateTo = this.navigateTo.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  navigateTo(pageName) {
    this.setState ({
      pageToShow: pageName
    });
  }

  toggleNav() {
    console.log("Toggle Nav");
    this.setState ({
      showNav: !this.state.showNav
    });
  }

  render() {
    return (
      <div className={this.state.showNav ? "ShowNav" : "HideNav"}>
        <Header toggleNav = {this.toggleNav}/>
        <div className="Body">
          {this.state.pageToShow == "home" ? <Body /> : null} 
          {this.state.pageToShow == "item" ? <ItemList /> : null}
        </div>
        <Menu 
          navigateToFunction = {this.navigateTo}
          toggleNav = {this.toggleNav}
          showNav = {this.state.showNav}/>
      </div>
    );
  }
}

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Header">
                <div className="Left">
                  <a className="Menu" onClick={this.props.toggleNav} />
                    
                </div>
                <div className="Right">
                    <User />
                </div>
            </div>
        );
    }
}

class Menu extends Component {
    constructor(props) {
        super(props);

        this.handleNavigateTo = this.handleNavigateTo.bind(this);
    }

    handleNavigateTo (event) {
        this.props.navigateToFunction(event.target.getAttribute("data"));
        this.props.toggleNav();
    }

    render() {
        return (
            <div className= {this.props.showNav ? "RightNav Show" : "RightNav"} >
                <div className="Content">
                    <div className="Header">
                        <a 
                            className="BackArrow" 
                            onClick={this.props.toggleNav} />
                    </div>
                    <div className = "List">
                        <div className = "Item">
                            <a onClick={this.handleNavigateTo} data='home'> Home </a>
                        </div>
                        <div className = "Item">
                            <a onClick={this.handleNavigateTo} data='item'> Show List </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked : false
        };
    }

    handleClick = () => {
        this.setState({
            clicked : true
        });
    }

    render() {
        return (
            <div>
                <a className="User" onClick={this.handleClick} />
                {this.state.clicked ? <Model content={<Login />} /> : null}
             </div>
        );
    }
}

export default App;
