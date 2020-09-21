import React, { Component } from 'react'
import Style from './style'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import * as postal_areas from 'src/state/services/postal_areas'
import logo from 'src/ui/images/logo.png'

class LocationView extends Component {
  state = {
    default_state: 'Chihuahua',
    default_county: 'Delicias',
    areas: [],
  }

  async componentDidMount() {
    await this.get_postal_areas(this.state.default_county)
  }

  on_city_change = async event => {
    await this.get_postal_areas(event.target.value)
  }

  get_postal_areas = async county => {
    const { areas } = await postal_areas.get_by_state_county({ state: 'Chihuahua', county })
    this.setState({
      areas,
    })
  }

  render() {
    const { default_county, default_state, areas } = this.state
    return (
      <Style>
        <LazyLoadImage className="logo" alt="minisuper" src={logo} align="absmiddle" />
        <div className="welcome">Bienvenido a Minisuper</div>
        <div className="title">Antes de comenzar, selecciona tu ubicación</div>
        <select className="state" disabled={true}>
          <option>{default_state}</option>
        </select>
        <select className="city" onChange={this.on_city_change}>
          <option>{default_county}</option>
          <option>Meoqui</option>
        </select>
        <select className="area">
          {areas.map((area, i) => (
            <option key={i} value={area.code}>
              {area.name}
            </option>
          ))}
        </select>
      </Style>
    )
  }
}

export default LocationView
