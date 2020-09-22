import React from 'react'
import { connect } from 'react-redux'
import LocationView from './LocationView'
import { set_location_request } from 'src/state/actions/location_actions'
import { show_alert_message } from 'src/state/actions/alert_actions'
import Style from './style'
import { paths } from '../../../../constants'

class PreferencesView extends React.Component {
  state = {
    map_location: {
      longitude: -102.552788,
      latitude: 23.634501,
      zoom: 3,
    },
  }

  componentDidMount() {
    const { location } = this.props
    this.setState({ map_location: location })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { location } = this.props
    if (
      prevState.map_location.latitude !== location.latitude ||
      prevState.map_location.longitude !== location.longitude ||
      prevState.map_location.zoom !== location.zoom
    ) {
      this.setState({ map_location: location })
    }
  }

  on_move_location = map_location => {
    this.setState({
      map_location,
    })
  }

  on_save = () => {
    const { history, show_alert_message, set_location_request } = this.props
    const { latitude, longitude, zoom } = this.state.map_location
    set_location_request(
      {
        latitude,
        longitude,
        zoom,
      },
      () => {
        show_alert_message({ message: 'Tu ubicación ha sido actualizada' }, () => {
          history.push(paths.app.index)
          window.location.reload()
        })
      },
    )
  }

  render() {
    const { map_location } = this.state
    return (
      <Style>
        <LocationView map_location={map_location} on_move_location={this.on_move_location} />
        <div className="button_container">
          <button className="accept_button" onClick={this.on_save}>
            Guardar
          </button>
        </div>
      </Style>
    )
  }
}

function mapStateToProps(state) {
  const { preferences, location } = state
  return {
    preferences,
    location,
  }
}

const mapDispatchToProps = {
  show_alert_message,
  set_location_request,
}

export default connect(mapStateToProps, mapDispatchToProps)(PreferencesView)
