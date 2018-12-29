import React, {Component} from 'react';
import './Header.css';
import Login from './Login'
import Model from './utils/Model'

const Header = () => { 
    return (
        <div className="Header">
            <div className="Left">
                <div>Menu Place Holder</div>
            </div>
            <div className="Right">
                <LoginButton />
            </div>
        </div>
    );
}

class LoginButton extends Component {
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
                <a onClick={this.handleClick}> Login </a>
                {this.state.clicked ? <Model content={<Login />} /> : null}
             </div>
        );
    }
}

export default Header;