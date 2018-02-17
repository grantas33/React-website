import React from 'react';

import './App.css'

export default class Header extends React.Component {
    render() {
        return <div className="jumbotron bg-img">
            <h1 style={{color: 'black'}}>Finette's cycles</h1>
            <h4 style={{color: '#840e24'}}>Recommended by your local bike shop!</h4>
        </div>
    }
}