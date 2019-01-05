import React, {Component} from 'react';
import './Model.css';

const Model = ({content, closeAction}) => { 
    return (
        <div className="Model">
            <div className="Content">
		        <div className = "Icon" onClick={closeAction}>
		    		<a className="Close" />
		    	</div>
                {content}
            </div>
        </div>
    );
}

export default Model;