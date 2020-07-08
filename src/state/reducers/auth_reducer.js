import * as types from '../actions/action_types'
import initial_state from './initial_state'
import Immutable from 'seamless-immutable'

export default function reducer(state = initial_state.auth, action) {
  switch (action.type) {
    case types.REGISTER_CUSTOMER_RESPONSE:
      return Immutable({
        ...state,
        list: Immutable(action.response),
      })
    default:
      return state
  }
}
