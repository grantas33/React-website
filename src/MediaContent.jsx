import React from 'react';
import road_bike_1 from './images/road_bike_1.jpg'
import bicycleData from './data/bicycle_data'
import Thumbnail from "./Thumbnail";

class MediaContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput : ''
        }
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e){
       this.setState({
           searchInput: e.target.value
                })
        console.log(this.state.searchInput)

    }

    render () {
        let bicycleList = bicycleData.map((bike, index) => {
            return <Thumbnail
                key={index}
                title={bike.title}
                description={bike.description}
                image={bike.image}
            />
        });

       bicycleList = bicycleList.filter( bike => (
            bike.props.title.toLowerCase().includes(this.state.searchInput.toLowerCase())
        ))

        return <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">

        <form className="navbar-form navbar-left" role="search">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Search"
                onChange={e => this.handleInput(e)}/>
            </div>
        </form>
            </div>
               </nav>
        <div className="row">
                {bicycleList}
            </div>
        </div>


    }
}

export default MediaContent;
