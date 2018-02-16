import React from 'react';
import FadeAndSlideTransition from 'react-transition-group/Transition'
import './App.css'

class Thumbnail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="col-md-6 col-lg-4">
            <div className="thumbnail">
                <a className="thumbnail">
                    <img src={this.props.image} alt={this.props.title} style={{height: '200px'}}/>
                </a>
                <div className="caption bicycle-thumb">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                </div>
            </div>
        </div>
    }
}

export default Thumbnail
