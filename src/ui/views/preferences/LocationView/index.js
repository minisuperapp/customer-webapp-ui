import React from 'react'
import Style from './style'

class LocationView extends React.Component {
  constructor(props) {
    super(props)
  }
  async componentDidMount() {
    await import('mapbox-gl/dist/mapbox-gl.css')
    const mapboxgl = await import('mapbox-gl')
    const { location, on_move_location } = this.props
    this.map = new mapboxgl.Map({
      accessToken:
        'pk.eyJ1IjoiYWxheW9yIiwiYSI6ImNrY3RqNm5seTF5d2Eyem1veHoyb3hweWUifQ.qRXsxqw_UkcdHJ7aZ3aApw',
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [location.lng, location.lat],
      zoom: location.zoom,
    })
    this.map.addControl(new mapboxgl.NavigationControl())
    this.marker = new mapboxgl.Marker().setLngLat([location.lng, location.lat]).addTo(this.map)
    this.map.on('move', () => {
      on_move_location({
        lng: this.map.getCenter().lng,
        lat: this.map.getCenter().lat,
        zoom: this.map.getZoom(),
      })
      this.marker.setLngLat([this.map.getCenter().lng, this.map.getCenter().lat])
    })
    this.map.on('idle', () => {
      this.setState({
        accept_disabled: false,
      })
    })
    const { get_location_request } = this.props
    get_location_request(location => {
      const { latitude, longitude, zoom } = location
      this.map.setCenter([longitude, latitude])
      this.map.setZoom(zoom)
    })
  }

  render() {
    return (
      <Style>
        <div className="location">
          <label htmlFor="location">Selecciona tu ubicación</label>
        </div>
        <div className="map_container">
          <div ref={el => (this.mapContainer = el)} className="map" />
        </div>
      </Style>
    )
  }
}

export default LocationView
