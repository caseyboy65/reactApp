import React, {Component} from 'react';
import './Header.css';
import Login from './Login'
import Model from './utils/Model'

const Header = () => { 
    return (
        <div className="Header">
            <div className="Left">
                <Menu />
            </div>
            <div className="Right">
                <User />
            </div>
        </div>
    );
}

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showNav : false
        };

        /*this.handleClick = this.handleClick.bind(this);*/
    }

    showNav = () => {
        this.setState({
            showNav : true
        });
        /*document.querySelector(".RightNav").classList.add("Show");*/
    }

    hideNav = () => {
        this.setState({
            showNav : false
        });
    }

    render() {
        return (
            <div>
                <a className="Menu" onClick={this.showNav} />
                <div className= {this.state.showNav ? "RightNav Show" : "RightNav"} >
                <div className="Content">
                    <div className="Header">
                        <a 
                            className="BackArrow" 
                            onClick={this.hideNav} />
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

export default Header;