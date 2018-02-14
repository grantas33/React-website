import React from 'react';

import './App.css'

export default (props) => {

        return <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
                <a className="thumbnail">
                    <img src={props.image} alt={props.title} style={{height: '200px'}}/>
                </a>
                <div className="caption bicycle-thumb">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>

}
