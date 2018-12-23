import React, { Component } from 'react';
import './App.css';
import Header from './ui/Header'
import { ProductsPage } from './ui/1_products'
import { geolocated } from "react-geolocated";

class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          {this.props.coords ?
              <ProductsPage customerLocation = {{
                latitude: this.props.coords.latitude,
                longitude: this.props.coords.longitude,
              }}/>
              : 'Cargando...'
          }
        </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(App);
