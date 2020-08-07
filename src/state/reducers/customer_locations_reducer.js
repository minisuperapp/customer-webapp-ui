import * as types from '../actions/action_types'
import initial_state from './initial_state'
import Immutable from 'seamless-immutable'

export default function reducer(state = initial_state.customer_locations, action) {
  switch (action.type) {
    case types.ADD_CUSTOMER_LOCATION_RESPONSE: {
      return Immutable([...state, action.customer_location])
    }
    case types.GET_PROFILE_RESPONSE: {
      return Immutable(action.profile.locations)
    }
    default:
      return state
  }
}
