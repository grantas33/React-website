import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabs: [0, 0]
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        let tabs = [];
        tabs[e] = 1;
        this.setState({
                          activeTabs: tabs
                      })
    }

    render() {
        return <div role="navigation" className="navbar-default">
            <ul className="nav nav-tabs nav-justified">
                <li role="presentation" className={this.state.activeTabs[0] ? 'active' : ''}
                    onClick={() => this.handleClick(0)}><Link to="/">Our bicycles</Link>
                </li>
                <li role="presentation" className={this.state.activeTabs[1] ? 'active' : ''}
                    onClick={() => this.handleClick(1)}><Link to="/orders">Order list</Link>
                </li>
        </ul>
        </div>
    }
}

export default Header