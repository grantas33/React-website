import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return <div role="navigation" className="navbar navbar-default">
            <ul class="nav nav-tabs nav-justified">
                <li role="presentation"><Link to="/">Our bicycles</Link></li>
                <li role="presentation"><Link to="/orders">Order list</Link></li>
        </ul>
        </div>
    }
}