import React, { Component } from 'react'
import Style from './style'

class LocationView extends Component {
  render() {
    return (
      <Style>
        <div className="welcome">Bienvenido a Minisuper</div>
        <div className="instructions">Selecciona tu ubicación</div>
      </Style>
    )
  }
}

export default LocationView
