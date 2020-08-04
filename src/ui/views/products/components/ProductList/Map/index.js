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
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    })
    this.map.addControl(new mapboxgl.NavigationControl())
    const { get_location_request } = this.props
    get_location_request(this.map)
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const { offers } = nextProps
    Object.values(offers).map(offer_list => {
      const offer = offer_list.offers[0]
      new mapboxgl.Marker().setLngLat([offer.longitude, offer.latitude]).addTo(this.map)
    })
  }

  render() {
    return (
      <Style>
        <div ref={el => (this.mapContainer = el)} className="map" />
      </Style>
    )
  }
}

function mapStateToProps(state) {
  const {
    best_offers: { by_product },
  } = state
  return {
    offers: by_product,
  }
}

const mapDispatchToProps = {
  get_location_request,
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
