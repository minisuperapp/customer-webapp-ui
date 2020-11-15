import * as types from '../actions/action_types'
import initial_state from './initial_state'
import Immutable from 'seamless-immutable'

export default function reducer(state = initial_state.profile, action) {
  switch (action.type) {
    case types.GET_PROFILE_RESPONSE: {
      const { email, phone_number, customer_id } = action.profile
      return Immutable({
        ...state,
        customer_id,
        email,
        phone_number,
      })
    }
    case types.SAVE_EMAIL_PHONE_RESPONSE: {
      const { email, phone_number } = action.response
      return Immutable({
        ...state,
        ...(phone_number && { phone_number }),
        ...(email && { email }),
      })
    }
    default:
      return state
  }
}
