import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from './actions';

class NavigationBar extends React.Component {


    render() {
        return <div role="navigation" className="navbar-default">
            <ul className="nav nav-tabs nav-justified">
                <li role="presentation" className={!this.props.tab ? 'active' : ''}
                    ><Link to="/">Our bicycles</Link>
                </li>
                <li role="presentation" className={this.props.tab ? 'active' : ''}
                   ><Link to="/orders">Order list</Link>
                </li>
        </ul>
        </div>
    }
}

const mapStateToProps = (state) => ({
    tab: state.currentTab
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);