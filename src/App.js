import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Ghoulery from './Ghoulery';
import Ghost from './Ghost.js';

export default class App extends Component {
    render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
                render={(routerProps) => <Ghoulery {...routerProps} />}
            />
            <Route
              path="/:id"
              exact
                render={(routerProps) => <Ghost {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

