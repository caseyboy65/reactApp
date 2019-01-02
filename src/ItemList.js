import React, {Component} from 'react';
import './ItemList.css';

class ItemList extends Component {
  render() {
    return (
        <div className="ItemList">
            <div className="Item" >
                <div className="Details">
                    <div className="Title">
                        Apple
                    </div>
                    <div className="Description">
                        Crisp, fresh, delicious
                    </div>
                    <div className="Cost">
                        99¢ / lb
                    </div>
                </div>
                <img src={require('./img/apples.jpg')} />
            </div>
        </div>
    );
  }
}

export default ItemList;