import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
        <div>
          Minisuper
          <Switch>
            <Route exact path='/' component={Header}/>
          </Switch>
        </div>
    );
  }
}

export default App;
