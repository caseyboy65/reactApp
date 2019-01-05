import React, {Component} from 'react';
import './ItemList.css';

class ItemList extends Component {
    render() {
        let data = [];
        this.props.items.forEach((item) => {
                data.push(<Item 
                            data={item}
                            action={this.props.action} /> );
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
      constructor(props){
        super(props);

        this.action = this.action.bind(this);
      }
    action() {
        this.props.action(this.props.data);
    }
    render() {
        let images = {};
        let r = require.context('./img', false, /\.(png|jpe?g|svg)$/);
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });

        return (
             <div className="Item" onClick={this.action}>
                <div className="Details">
                    <div className="Title">
                        {this.props.data.name}
                    </div>
                    <div className="Description">
                        {this.props.data.description}
                    </div>
                    <div className="Cost">
                        {this.props.data.price}
                    </div>
                </div>
                <img src={images[this.props.data.image]} />
            </div>
        );    
    }
    
}

export default ItemList;