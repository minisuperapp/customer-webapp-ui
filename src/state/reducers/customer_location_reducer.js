import * as types from '../actions/action_types'
import initial_state from './initial_state'
import Immutable from 'seamless-immutable'

export default function reducer(state = initial_state.customer_location, action) {
  switch (action.type) {
    case types.ADD_CUSTOMER_LOCATION_RESPONSE: {
      return Immutable([...state, action.response])
    }
    default:
      return state
  }
}
