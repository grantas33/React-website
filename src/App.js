import React from 'react';
import { Route } from 'react-router-dom';
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import OrdersList from "./OrdersList";

class App extends React.Component {
    constructor(props) {
        super(props);

    }
    render () {
        return (
            <div className="container" >
                <Header/>
                <NavigationBar/>
                {/*<Route exact path="/" component={}/>*/}
                 <Route path="/orders" component={OrdersList}/>
            </div>
        );
    }
}

export default App;
