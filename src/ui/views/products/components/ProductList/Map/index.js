import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import Style from './style'
import * as images from 'src/ui/views/common/images'

export class Map extends Component {
  async componentDidMount() {
    const {
      location: { latitude, longitude },
    } = this.props
    const zoom = 12
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: zoom,
    })
    this.map.addControl(new mapboxgl.NavigationControl())
  }

  componentDidUpdate() {
    const { offers } = this.props
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
    const { go_to_location } = this.props
    return (
      <Style>
        <div ref={el => (this.mapContainer = el)} className="map" />
        <button className="change_location" onClick={go_to_location}>
          Cambiar mi localizacion
        </button>
      </Style>
    )
  }
}
