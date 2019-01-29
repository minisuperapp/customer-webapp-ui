import React, { Component } from 'react'
import './App.css'
import Main from './ui/Main'
import { geolocated } from 'react-geolocated'

class App extends Component {
  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Tu navegador no soporta geolocalización :(</div>
    ) : (
      <div>
        {this.props.coords ? (
          <Main
            customerLocation={{
              latitude: this.props.coords.latitude,
              longitude: this.props.coords.longitude,
            }}
          />
        ) : (
          'Cargando...'
        )}
      </div>
    )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App)
