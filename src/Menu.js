import React, {Component} from 'react';
import './Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.handleNavigateTo = this.handleNavigateTo.bind(this);
    }

    handleNavigateTo (event) {
        this.props.navigateToFunction(event.target.getAttribute("data"));
        this.props.toggleNav();
    }

    buildInventoryList(data) {
        let menuItems = [];
        data.forEach((item) => {
            menuItems.push(<a onClick={this.handleNavigateTo} data={item.category}> {item.category} </a> );
        }); 

        return menuItems;
    }

    render() {
        return (
            <div className= {this.props.showNav ? "RightNav Show" : "RightNav"} >
                <div className="Content">
                    <div className="Header">
                        <div className="Icon" onClick={this.props.toggleNav}>
                            <a className="BackArrow" />
                            <span className="Label"> Back </span>
                        </div>
                    </div>
                    <div className = "List">
                        <a onClick={this.handleNavigateTo} data='Home'> Home </a>
                        {this.buildInventoryList(this.props.inventory)}
                    </div>
                </div>
            </div>
        );
    }
}

class MenuItem extends Component {
    render() {
        return (
            <div className = "Item">
                <a onClick={this.handleNavigateTo} data='home'> Home </a>
            </div>
        )
    }
}

export default Menu;