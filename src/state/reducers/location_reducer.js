import * as types from '../actions/action_types'
import initial_state from './initial_state'
import Immutable from 'seamless-immutable'

export default function reducer(state = initial_state.location, action) {
  switch (action.type) {
    case types.SET_LOCATION_REQUEST: {
      const { latitude, longitude, zoom } = action.location
      return Immutable({ latitude, longitude, zoom })
    }
    case types.GET_PROFILE_RESPONSE: {
      const { latitude, longitude, zoom } = action.profile.location
      return Immutable({ latitude, longitude, zoom: zoom || 12 })
    }
    default:
      return state
  }
}
