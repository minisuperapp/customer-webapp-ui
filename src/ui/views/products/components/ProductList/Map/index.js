import React, { Component } from 'react'
import { connect } from 'react-redux'
import mapboxgl from 'mapbox-gl'
import { get_location_request } from 'src/state/actions/location_actions'
import Style from './style'
import * as images from 'src/ui/views/common/images'

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
      if (!offer.longitude || !offer.latitude) {
        return
      }
      const el = document.createElement('div')
      el.className = 'marker'
      el.style.backgroundImage = `url(${images.getProductImageURL(offer.product_code)})`
      el.style.backgroundPosition = 'center'
      el.style.backgroundSize = 'contain'
      el.style.backgroundRepeat = 'no-repeat'
      el.style.width = '30px'
      el.style.height = '30px'
      new mapboxgl.Marker(el).setLngLat([offer.longitude, offer.latitude]).addTo(this.map)
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
