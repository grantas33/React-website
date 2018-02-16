import React from 'react';
import road_bike_1 from './images/road_bike_1.jpg'
import bicycleData from './data/bicycle_data'
import Thumbnail from "./Thumbnail";
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class MediaContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput : '',
            filter: 'All bikes'
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleFilter = this.handleFilter.bind(this)
    }

    handleInput(e){
       this.setState({
           searchInput: e.target.value
                })
    }

    handleFilter(e){
        this.setState({
            filter: e
                      })
    }


    render () {
        let bicycleList = bicycleData.map((bike, index) => {
            return <Thumbnail
                key={index}
                title={bike.title}
                description={bike.description}
                image={bike.image}
                type={bike.type}
            />
        });

       bicycleList = bicycleList.filter( bike => (
            bike.props.title.toLowerCase().includes(this.state.searchInput.toLowerCase())
        ))
        if(this.state.filter === 'Road'){
            bicycleList = bicycleList.filter( bike => (
                bike.props.type === 1
            ))
        } else if(this.state.filter === 'Mountain'){
            bicycleList = bicycleList.filter( bike => (
                bike.props.type === 0
            ))
        }

        let bicycleRows = Math.ceil(bicycleList.length/3);
        let rowContent = [];
        for(let i=0; i<bicycleRows; i++){
            rowContent.push( <div className='row' key={i}>
                    <CSSTransitionGroup
                        transitionName='fade'
                        transitionEnterTimeout={0}
                        transitionLeaveTimeout={0}
                    >
                        {bicycleList.slice(i*3, (i+1)*3)}
                    </CSSTransitionGroup>
                </div>
            )
        }
        return <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">

                    <form className="navbar-form navbar-left" role="search">
                        <div className="form-group">
                            <input type="text" className="form-control"
                                   placeholder="Search for a bike"
                                   onChange={e => this.handleInput(e)}/>
                        </div>
                    </form>
                    <div className="container-fluid navbar-right">
                        <p className="navbar-text">Show:</p>
                        <ul className="nav navbar-nav">
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" role="button"
                                   aria-haspopup="true" aria-expanded="false">
                                    {this.state.filter}
                                    <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li onClick={() => {
                                        this.handleFilter('All bikes')
                                    }}><a>All bikes</a></li>
                                    <li onClick={() => {
                                        this.handleFilter('Road')
                                    }}><a>Road</a></li>
                                    <li onClick={() => {
                                        this.handleFilter('Mountain')
                                    }}><a>Mountain</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {bicycleList.length !== 0 ? <div className='container-fluid'>{rowContent}</div> :
             <h3 className='empty-list'>
                 Nothing found that matches '{this.state.searchInput}'</h3>}
        </div>


    }
}

export default MediaContent;
