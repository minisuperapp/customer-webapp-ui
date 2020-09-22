import * as types from '../actions/action_types'
import initial_state from './initial_state'
import Immutable from 'seamless-immutable'

export default function reducer(state = initial_state.alert, action) {
  switch (action.type) {
    case types.SHOW_ALERT_MESSAGE: {
      return Immutable({
        ...state,
        message: action.properties.message,
        ok_button_name: action.properties.ok_button_name || 'OK',
        on_accept: action.on_accept,
      })
    }
    case types.HIDE_ALERT_MESSAGE: {
      return Immutable({
        ...state,
        message: '',
      })
    }
    case types.HIDE_NO_OFFERS_ALERT: {
      return Immutable({
        ...state,
        hide_no_offers_alert: true,
      })
    }
    default:
      return state
  }
}
