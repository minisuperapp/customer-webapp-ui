import React, { Component } from 'react'

import Style from './style'
import mapboxgl from 'mapbox-gl'
import { get_location_request } from 'src/state/actions/location_actions'
import { connect } from 'react-redux'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lng: -102.552788,
      lat: 23.634501,
      zoom: 3,
    }
  }
  async componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    })
    map.addControl(new mapboxgl.NavigationControl())
    const { get_location_request } = this.props
    get_location_request(map)
  }
  render() {
    return (
      <Style>
        <div ref={el => (this.mapContainer = el)} className="map" />
      </Style>
    )
  }
}

function mapStateToProps() {
  return {}
}

const mapDispatchToProps = {
  get_location_request,
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
