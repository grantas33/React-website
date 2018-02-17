import React from 'react';
import './App.css'

class Thumbnail extends React.Component {
    render() {
        return <div className="col-md-6 col-lg-4">
            <div className="thumbnail">
                <a className="thumbnail">
                    <img src={this.props.image}
                         data-toggle="modal"
                         data-target=".bd-example-modal-lg"
                         alt={this.props.title}
                         style={{height: '200px'}}
                         onClick={()=> this.props.onClick()}/>
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
