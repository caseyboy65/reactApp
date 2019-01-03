import React, {Component} from 'react';
import './ItemList.css';

class ItemList extends Component {
    render() {
        let data = [];
        this.props.items.forEach((item) => {
                data.push(<Item 
                            name={item.name}
                            description={item.description}
                            price={item.price} 
                            image={item.image} /> );
            });  
        return (
               <div className="ItemList">
                    <div className="Title">
                        {this.props.category}
                    </div>
                    <div className="Content">
                        {data}
                    </div>
               </div>
        );
    }
}

class Item extends Component {
    render() {
        let images = {};
        let r = require.context('./img', false, /\.(png|jpe?g|svg)$/);
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });

        return (
             <div className="Item" >
                <div className="Details">
                    <div className="Title">
                        {this.props.name}
                    </div>
                    <div className="Description">
                        {this.props.description}
                    </div>
                    <div className="Cost">
                        {this.props.price}
                    </div>
                </div>
                <img src={images[this.props.image]} />
            </div>
        );    
    }
    
}

export default ItemList;