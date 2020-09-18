import React from 'react'
import { connect } from 'react-redux'
import LocationView from './LocationView'
import { get_location_request, set_location } from 'src/state/actions/location_actions'
import { show_alert_message } from 'src/state/actions/alert_actions'
import Style from './style'

class PreferencesView extends React.Component {
  state = {
    location: {
      lng: -102.552788,
      lat: 23.634501,
      zoom: 3,
    },
  }
  componentDidMount() {}

  on_move_location = location => {
    this.setState({
      location,
    })
  }

  on_save = () => {
    debugger
    const { show_alert_message } = this.props
    set_location({
      latitude: this.state.location.lat,
      longitude: this.state.location.lng,
      zoom: this.state.location.zoom,
    })
    show_alert_message('Tu ubicación ha sido actualizada')
  }

  render() {
    const { get_location_request } = this.props
    return (
      <Style>
        <LocationView
          location={this.state.location}
          on_move_location={this.on_move_location}
          get_location_request={get_location_request}
        />
        <div className="button_container">
          <button onClick={this.on_save}>Guardar</button>
        </div>
      </Style>
    )
  }
}

function mapStateToProps(state) {
  const { preferences } = state
  return {
    preferences,
  }
}

const mapDispatchToProps = {
  get_location_request,
  show_alert_message,
  set_location,
}

export default connect(mapStateToProps, mapDispatchToProps)(PreferencesView)
