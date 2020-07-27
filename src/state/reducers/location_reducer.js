import * as types from '../actions/action_types'
import initial_state from './initial_state'
import Immutable from 'seamless-immutable'

export default function reducer(state = initial_state.location, action) {
  switch (action.type) {
    case types.GET_LOCATION_RESPONSE: {
      const { latitude, longitude, zoom } = action.location
      return Immutable({ latitude, longitude, zoom })
    }
    case types.SET_LOCATION: {
      const { latitude, longitude, zoom } = action.location
      return Immutable({ latitude, longitude, zoom })
    }
    default:
      return state
  }
}
