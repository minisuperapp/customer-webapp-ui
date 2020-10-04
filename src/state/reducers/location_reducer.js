import * as types from '../actions/action_types'
import initial_state from './initial_state'
import Immutable from 'seamless-immutable'

export default function reducer(state = initial_state.location, action) {
  switch (action.type) {
    case types.SET_POSTAL_AREA_RESPONSE: {
      const { location } = action.response
      if (location) {
        return Immutable(location)
      }
      return state
    }
    case types.GET_PROFILE_RESPONSE: {
      const { location } = action.profile
      if (location) {
        return Immutable(location)
      }
      return state
    }
    case types.SET_LOCATION_RESPONSE: {
      const { latitude, longitude, zoom } = action.location
      return Immutable({
        ...state,
        latitude,
        longitude,
        zoom,
      })
    }
    default:
      return state
  }
}
