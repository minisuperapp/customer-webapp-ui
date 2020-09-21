import React, { Component } from 'react'
import Style from './style'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import * as postal_areas from 'src/state/services/postal_areas'
import logo from 'src/ui/images/logo.png'
import Select from 'react-select'

class LocationView extends Component {
  state = {
    loading: false,
    states: [
      {
        value: 'Chihuahua',
        label: 'Chihuahua',
      },
    ],
    counties: [
      {
        value: 'Delicias',
        label: 'Delicias',
      },
      {
        value: 'Meoqui',
        label: 'Meoqui',
      },
      {
        value: 'Camargo',
        label: 'Camargo',
      },
    ],
    areas: [],
    selected_area: null,
  }

  async componentDidMount() {
    await this.get_postal_areas(this.state.counties[0].value)
  }

  on_city_change = async city => {
    await this.get_postal_areas(city.value)
  }

  on_area_change = area => {
    this.setState({
      selected_area: area,
    })
  }

  get_postal_areas = async county => {
    this.setState({ loading: true, selected_area: null })
    const { areas } = await postal_areas.get_by_state_county({ state: 'Chihuahua', county })
    const areas_to_select = areas.map(area => ({ value: area.code, label: area.name }))
    this.setState(
      {
        areas: areas_to_select,
      },
      () => {
        this.setState({ loading: false })
      },
    )
  }

  render() {
    const { counties, states, areas, loading, selected_area } = this.state
    return (
      <Style>
        <LazyLoadImage className="logo" alt="minisuper" src={logo} align="absmiddle" />
        <div className="welcome">Bienvenido a Minisuper</div>
        <div className="title">Antes de comenzar, selecciona tu ubicación</div>
        <Select className="state" defaultValue={states[0]} options={states} />
        <Select
          className="city"
          defaultValue={counties[0]}
          options={counties}
          onChange={this.on_city_change}
        />
        <Select
          value={selected_area}
          onChange={this.on_area_change}
          className="area"
          autoFocus={true}
          options={areas}
          placeholder="Colonia"
          isClearable={true}
          isLoading={loading}
        />
      </Style>
    )
  }
}

export default LocationView
