import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home} from "./Home";
import {About} from "./About";
import {Profile} from "./Profile";

export class App extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/profile' component={Profile}/>
                </Switch>
            </main>
        );
    }
}