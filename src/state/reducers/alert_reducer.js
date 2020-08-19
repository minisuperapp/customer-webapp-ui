import * as types from '../actions/action_types'
import initial_state from './initial_state'
import Immutable from 'seamless-immutable'

export default function reducer(state = initial_state.alert, action) {
  switch (action.type) {
    case types.SHOW_ALERT_MESSAGE: {
      return Immutable({
        ...state,
        message: action.message,
      })
    }
    case types.HIDE_ALERT_MESSAGE: {
      return Immutable({
        ...state,
        message: '',
      })
    }
    default:
      return state
  }
}
