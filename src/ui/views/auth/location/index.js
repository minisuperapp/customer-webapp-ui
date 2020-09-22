import React, { Component } from 'react'
import Style from './style'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import * as postal_areas from 'src/state/services/postal_areas'
import { set_postal_area_request } from 'src/state/actions/location_actions'
import logo from 'src/ui/images/logo.png'
import Select from 'react-select'
import { connect } from 'react-redux'
import { paths } from 'src/constants'

class LocationView extends Component {
  default_state = {
    value: 'Chihuahua',
    label: 'Chihuahua',
  }
  default_county = {
    value: 'Delicias',
    label: 'Delicias',
  }

  state = {
    loading: false,
    states: [this.default_state],
    counties: [
      this.default_county,
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
    selected_county: this.default_county,
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

  on_accept = () => {
    const { history, set_postal_area_request } = this.props
    set_postal_area_request(
      {
        postal_area_code: this.state.selected_area.value,
        postal_area_name: this.state.selected_area.label,
        postal_area_county: this.state.selected_county.value,
        postal_area_state: this.default_state.value,
      },
      () => {
        history.push(paths.home)
      },
    )
  }

  render() {
    const { counties, states, areas, loading, selected_area } = this.state
    const disable_button = !selected_area
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
          placeholder="Selecciona tu colonia"
          isLoading={loading}
          noOptionsMessage={() => 'No hay datos'}
        />
        <div className="area_name">
          {selected_area && `${selected_area.value} - ${selected_area.label}`}
        </div>
        <button
          disabled={disable_button}
          className={disable_button ? 'disabled_button' : 'accept_button'}
          onClick={this.on_accept}>
          Continuar
        </button>
      </Style>
    )
  }
}

function mapStateToProps() {
  return {}
}

const mapDispatchToProps = {
  set_postal_area_request,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationView)
