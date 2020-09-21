import React, { Component } from 'react'
import Style from './style'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import logo from 'src/ui/images/logo.png'

class LocationView extends Component {
  render() {
    return (
      <Style>
        <LazyLoadImage className="logo" alt="minisuper" src={logo} align="absmiddle" />
        <div className="welcome">Bienvenido a Minisuper</div>
        <div className="title">Antes de comenzar, selecciona tu ubicación</div>
        <select className="state" disabled={true}>
          <option>Chihuahua</option>
        </select>
        <select className="city">
          <option>Delicias</option>
          <option>Meoqui</option>
        </select>
      </Style>
    )
  }
}

export default LocationView
