import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import CreateExplanation from './container/createExplanation/createExplanation';
import Login from './container/Login/login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/createExplanation" component={CreateExplanation} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
