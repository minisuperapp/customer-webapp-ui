import * as types from '../actions/action_types'
import initial_state from './initial_state'
import Immutable from 'seamless-immutable'

export default function reducer(state = initial_state.customer_addresses, action) {
  switch (action.type) {
    case types.ADD_CUSTOMER_ADDRESS_RESPONSE: {
      return Immutable([...state, action.customer_address])
    }
    case types.GET_PROFILE_RESPONSE: {
      return Immutable(action.profile.addresses)
    }
    default:
      return state
  }
}
