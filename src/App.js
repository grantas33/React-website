import React from 'react';
import { Route } from 'react-router-dom';
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import OrdersList from "./OrdersList";
import MediaContent from "./MediaContent";

class App extends React.Component {

    render () {
        return (
            <div className="container" >
                <Header/>
                <NavigationBar/>
                 <Route exact path={'/'} component={MediaContent}/>
                 <Route path={'/orders'} component={OrdersList}/>
            </div>
        );
    }
}

export default App;
