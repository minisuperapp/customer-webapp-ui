import React from 'react'
import Style from './style'

class LocationView extends React.Component {
  constructor(props) {
    super(props)
  }
  async componentDidMount() {
    await import('mapbox-gl/dist/mapbox-gl.css')
    const mapboxgl = await import('mapbox-gl')
    const { map_location } = this.props
    const { latitude, longitude, zoom } = map_location
    this.map = new mapboxgl.Map({
      accessToken:
        'pk.eyJ1IjoiYWxheW9yIiwiYSI6ImNrY3RqNm5seTF5d2Eyem1veHoyb3hweWUifQ.qRXsxqw_UkcdHJ7aZ3aApw',
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom,
    })
    this.map.addControl(new mapboxgl.NavigationControl())
    this.marker = new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(this.map)
    this.map.on('move', this.on_move)
    this.map.on('moveend', this.on_move)
    this.map.on('idle', () => {
      this.setState({
        accept_disabled: false,
      })
    })
  }

  on_move = async () => {
    const { on_move_location } = this.props
    on_move_location({
      longitude: this.map.getCenter().lng,
      latitude: this.map.getCenter().lat,
      zoom: this.map.getZoom(),
    })
    this.marker.setLngLat([this.map.getCenter().lng, this.map.getCenter().lat])
  }

  render() {
    return (
      <Style>
        <div className="title">Selecciona y guarda tu ubicación exacta</div>
        <div className="map_container">
          <div ref={el => (this.mapContainer = el)} className="map" />
        </div>
      </Style>
    )
  }
}

export default LocationView
