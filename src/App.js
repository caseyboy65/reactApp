import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import Model from './utils/Model';
import Body from './Body';
import ItemList from './ItemList';
import Menu from './Menu';

const FRUITS = [
  {name: 'Apple', description: 'Crisp, fresh, delicious', price: '$.99 / lb', image: 'apple.jpeg'},
  {name: 'Orange', description: 'Juicy, fresh, citrus', price: '$1.22 / lb', image: 'orange.jpeg'},
  {name: 'Banana', description: 'Sweet, fresh, ripe', price: '$.69 / lb', image: 'banana.jpeg'},
  {name: 'Strawberry', description: 'Flavorful, fresh, red', price: '$1.62 / lb', image: 'strawberry.jpeg'},
  {name: 'Kiwi', description: 'Green, fresh, exotic', price: '$2.21 / lb', image: 'kiwi.jpeg'},
  {name: 'Grapes', description: 'Sour, fresh, tasty', price: '$2.21 / lb', image: 'grape.jpeg'},
];

const BEEF = [
  {name: 'Ribeye', description: 'Amazing!', price: '$9.89 / lb', image: 'ribeye.jpeg'},
];

const PORK = [
  {name: 'Chops', description: 'Amazing!', price: '$2.89 / lb', image: 'chops.jpeg'},
];

const SEAFOOD = [
  {name: 'Lobster', description: 'Steamed, fresh, delicious', price: '$9.99 / lb', image: 'lobster.jpeg'},
  {name: 'Clams', description: 'Steamed, fresh, delicious', price: '$7.99 / lb', image: 'clams.jpeg'},
];

const FROZEN = [
  {name: 'Pizza Rolls', description: 'Fun, frozen', price: '$4.99', image: 'pizzaroll.jpeg'},
  {name: 'Taquitos', description: 'Mexican, frozen', price: '$3.99', image: 'taquitos.jpeg'},
];

const INVENTORY = [
  {category: "Fruit", data: FRUITS},
  {category: "Seafood", data: SEAFOOD},
  {category: "Frozen", data: FROZEN},
  {category: "Beef", data: BEEF},
  {category: "Pork", data: PORK},
]


class App extends Component {
  constructor(){
    super();

    this.state = {
      pageToShow: "Home",
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

  getBodyContent(pageToShow) {
    let content = [];
    if (pageToShow == "Home") {
      content.push(<Body />)
    } else {
      INVENTORY.forEach((item) => {
        if(item.category == pageToShow) {
          content.push(<ItemList items={item.data} category={item.category}/> );
        }
      }); 
    }

    return content;
  }

  render() {
    return (
      <div className={this.state.showNav ? "ShowNav" : "HideNav"}>
        <Header toggleNav = {this.toggleNav}/>
        <div className="Body">
          {this.getBodyContent(this.state.pageToShow)}      
        </div>
        <Menu 
          navigateToFunction = {this.navigateTo}
          inventory = {INVENTORY}
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
                  <div className="Icon" onClick={this.props.toggleNav}>
                    <a className="Menu" />
                    <span className="Label"> Menu </span>
                  </div>
                    
                </div>
                <div className="Right"> 
                    <div className="Icon">
                      <a className="ShoppingCart" />
                      <span className="Label"> Cart </span>
                    </div>
                    <User />
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
            <div className="Icon" onClick={this.handleClick}>
                <a className="User" />
                <span className="Label"> Login </span>
                {this.state.clicked ? <Model content={<Login />} /> : null}
             </div>
        );
    }
}

export default App;
