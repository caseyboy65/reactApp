import React, {Component} from 'react';
import './RightNav.css';

class RightNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showNav : false
        };
    }

    closeNav = () => {
        this.state = {
            showNav : false
        };
        
    }

    showNav = () => {
		this.state = {
            showNav : true
        };
    }

    render() {
        return (
            <div className= {this.state.showNav ? "RightNav Show" : "RightNav"} >
	            <div className="Content">
		            <div className="Header">
		            	<a 
		            		className="BackArrow" 
		            		onClick={this.closeNav} />
		        	</div>
	                
	            </div>
	        </div>
        );
    }
}

export default RightNav;