import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Characters from './components/Characters'
import CharacterItem from './components/CharacterItem';

export default class Router extends Component {
    render() {
        return (

            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Characters} />
                </Switch>
            </BrowserRouter>

        )
    }
}
