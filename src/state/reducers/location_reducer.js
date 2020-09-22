import * as types from '../actions/action_types'
import initial_state from './initial_state'
import Immutable from 'seamless-immutable'

export default function reducer(state = initial_state.location, action) {
  switch (action.type) {
    case types.SET_POSTAL_AREA_RESPONSE: {
      const { location } = action.response
      if (location) {
        const { latitude, longitude, zoom } = location
        return Immutable({ latitude, longitude, zoom })
      }
      return state
    }
    case types.GET_PROFILE_RESPONSE: {
      const { location } = action.profile
      if (location) {
        const { latitude, longitude, zoom } = location
        return Immutable({ latitude, longitude, zoom: zoom || 12 })
      }
      return state
    }
    case types.SET_LOCATION_REQUEST: {
      const { latitude, longitude, zoom } = action.location
      return Immutable({ latitude, longitude, zoom })
    }
    default:
      return state
  }
}
