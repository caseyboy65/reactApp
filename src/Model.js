import React, {Component} from 'react';
import './Model.css';

const Model = ({content}) => { 
    return (
        <div className="Model">
            <div className="Content">
                {content}
            </div>
        </div>
    );
}

export default Model;