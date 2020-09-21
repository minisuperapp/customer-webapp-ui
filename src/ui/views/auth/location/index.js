import React, { Component } from 'react'
import Style from './style'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import * as postal_areas from 'src/state/services/postal_areas'
import logo from 'src/ui/images/logo.png'

class LocationView extends Component {
  state = {
    areas: [],
  }
  get_postal_areas = async event => {
    const county = event.target.value
    const { areas } = await postal_areas.get_by_state_county({ state: 'Chihuahua', county })
    debugger
    this.setState({
      areas,
    })
  }

  render() {
    return (
      <Style>
        <LazyLoadImage className="logo" alt="minisuper" src={logo} align="absmiddle" />
        <div className="welcome">Bienvenido a Minisuper</div>
        <div className="title">Antes de comenzar, selecciona tu ubicación</div>
        <select className="state" disabled={true}>
          <option>Chihuahua</option>
        </select>
        <select className="city" onChange={this.get_postal_areas}>
          <option>Delicias</option>
          <option>Meoqui</option>
        </select>
      </Style>
    )
  }
}

export default LocationView
