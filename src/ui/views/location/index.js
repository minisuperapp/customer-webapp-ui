import React from 'react'
import { connect } from 'react-redux'
import Style from './style'
import { paths } from 'src/constants'
import { set_location } from 'src/state/actions/location_actions'

class LocationView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lng: -102.552788,
      lat: 23.634501,
      zoom: 3,
      accept_disabled: true,
    }
  }
  async componentDidMount() {
    await import('mapbox-gl/dist/mapbox-gl.css')
    const mapboxgl = await import('mapbox-gl')

    localStorage.removeItem('latitude')
    localStorage.removeItem('longitude')
    localStorage.removeItem('zoom')

    const map = new mapboxgl.Map({
      accessToken:
        'pk.eyJ1IjoiYWxheW9yIiwiYSI6ImNrY3RqNm5seTF5d2Eyem1veHoyb3hweWUifQ.qRXsxqw_UkcdHJ7aZ3aApw',
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    })
    map.addControl(new mapboxgl.NavigationControl())
    this.marker = new mapboxgl.Marker().setLngLat([this.state.lng, this.state.lat]).addTo(map)
    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng,
        lat: map.getCenter().lat,
        zoom: map.getZoom(),
      })
      this.marker.setLngLat([map.getCenter().lng, map.getCenter().lat])
    })
    map.on('idle', () => {
      this.setState({
        accept_disabled: false,
      })
    })

    navigator.geolocation.getCurrentPosition(browser_location => {
      const { longitude, latitude } = browser_location.coords
      const zoom = 10
      this.setState({
        lng: latitude,
        lat: longitude,
        zoom,
      })
      map.flyTo({ center: [longitude, latitude], zoom })
    })
  }

  onCancel = () => {
    const { history } = this.props
    history.push(paths.products)
  }

  onAccept = () => {
    const { history, set_location } = this.props
    set_location(
      {
        latitude: this.state.lat,
        longitude: this.state.lng,
        zoom: this.state.zoom,
      },
      () => {
        history.push(paths.home)
        window.location.reload()
      },
    )
  }

  render() {
    return (
      <Style>
        <div className="title">Mueve el mapa para colocar el marcador en tu ubicación.</div>
        <div className="map_container">
          <div ref={el => (this.mapContainer = el)} className="map" />
        </div>
        <div className="button_container">
          <button
            disabled={this.state.accept_disabled}
            className={
              this.state.accept_disabled ? 'accept_disabled accept_button' : 'accept_button'
            }
            onClick={this.onAccept}>
            Seleccionar
          </button>
        </div>
      </Style>
    )
  }
}

function mapStateToProps() {
  return {}
}

const mapDispatchToProps = {
  set_location,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationView)
