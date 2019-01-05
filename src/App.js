import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import Model from './utils/Model';
import Body from './Body';
import ItemList from './ItemList';
import Menu from './Menu';

let shoppingCart = [
];

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
      showNav: false,
      showCart: false,
      numberOfItemsInCart: 0
    };

    this.navigateTo = this.navigateTo.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
    this.addToShoppingCart = this.addToShoppingCart.bind(this);
    this.removeFromShoppingCart = this.removeFromShoppingCart.bind(this);
    this.toggleCart = this.toggleCart.bind(this);
  }

  navigateTo(pageName) {
    this.setState ({
      pageToShow: pageName
    });
  }

  toggleNav() {
    this.setState ({
      showNav: !this.state.showNav
    });
  }

  addToShoppingCart(data) {
    shoppingCart.push(data);
    var newCartSize = this.state.numberOfItemsInCart + 1;
    this.setState({
      numberOfItemsInCart: newCartSize
    });
  }

  removeFromShoppingCart(data) {
    for (var x = 0; x <this.state.numberOfItemsInCart; x++){
      if (shoppingCart[x].name == data.name) {
          shoppingCart.splice(x, 1);
          var newCartSize = this.state.numberOfItemsInCart - 1;
          this.setState({
            numberOfItemsInCart: newCartSize
          });
          break;
      }
    }
  }

  getBodyContent(pageToShow) {
    let content = [];
    if (pageToShow == "Home") {
      content.push(<Body />)
    } else {
      INVENTORY.forEach((item) => {
        if(item.category == pageToShow) {
          content.push(<ItemList 
                          action = {this.addToShoppingCart} 
                          items={item.data} 
                          category={item.category}/> );
        }
      }); 
    }

    return content;
  }

  toggleCart() {
    this.setState ({
      showCart: !this.state.showCart
    });
  }

  render() {
    return (
      <div className={this.state.showNav ? "ShowNav" : "HideNav"}>
        <Header 
          cartSize = {this.state.numberOfItemsInCart}
          toggleNav = {this.toggleNav} 
          toggleCart = {this.toggleCart} />
        <div className="Body">
          {this.getBodyContent(this.state.pageToShow)}      
        </div>
        <Menu 
          navigateToFunction = {this.navigateTo}
          inventory = {INVENTORY}
          toggleNav = {this.toggleNav}
          showNav = {this.state.showNav}/>
        {this.state.showCart ? <Model 
                                    closeAction = {this.toggleCart}
                                    content={<ItemList 
                                                action={this.removeFromShoppingCart}
                                                items={shoppingCart}
                                                category="Shopping Cart" />} /> : null}
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
                    <div className="Icon" onClick= {this.props.toggleCart}>
                      <a className="ShoppingCart" />
                      <span className="CartSize"> {this.props.cartSize} </span>
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
