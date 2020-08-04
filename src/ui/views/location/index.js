import React from 'react'
import { connect } from 'react-redux'
import mapboxgl from 'mapbox-gl'
import Style from './style'
import 'mapbox-gl/dist/mapbox-gl.css'
import { paths } from 'src/constants'
import { get_location_request, set_location } from 'src/state/actions/location_actions'

mapboxgl.accessToken =
  'pk.eyJ1IjoiYWxheW9yIiwiYSI6ImNrY3RqNm5seTF5d2Eyem1veHoyb3hweWUifQ.qRXsxqw_UkcdHJ7aZ3aApw'

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
    const map = new mapboxgl.Map({
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
    const { get_location_request } = this.props
    get_location_request((location) => {
      const { latitude, longitude, zoom } = location
      this.map.flyTo({ center: [longitude, latitude], zoom })
    })
  }

  onCancel = () => {
    const { history } = this.props
    history.push(paths.products)
  }

  onAccept = () => {
    const { history, set_location } = this.props
    set_location({
      latitude: this.state.lat,
      longitude: this.state.lng,
      zoom: this.state.zoom,
    }, () => {
      history.push(paths.home)
    })
  }

  render() {
    return (
      <Style>
        <div className="title">Selecciona tu localización</div>
        <div className="map_container">
          <div ref={(el) => (this.mapContainer = el)} className="map" />
        </div>
        <div className="button_container">
          <button
            disabled={this.state.accept_disabled}
            className={this.state.accept_disabled ? 'accept_disabled' : ''}
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
  get_location_request,
  set_location,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationView)
