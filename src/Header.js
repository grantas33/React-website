import React from 'react';
import { Link } from 'react-router-dom';

import './App.css'

export default class Header extends React.Component {
    render() {
        return <div className="jumbotron bg-img">
            <h1 style={{color: 'white'}}>Finette's cycles</h1>
            <h4 style={{color: 'lightgray'}}>Recommended by your local bike shop!</h4>
        </div>
    }
}