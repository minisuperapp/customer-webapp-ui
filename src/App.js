import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './ui/Header'
import { Products } from './ui/1_products'

class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <Products/>
        </div>
    );
  }
}

export default App;
