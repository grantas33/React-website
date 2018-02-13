import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return <div className="jumbotron">
            <h1>Finette's cycles <small>Recommended by your LBS!</small></h1>
        </div>
    }
}