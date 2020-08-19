import * as types from './action_types'

export function show_alert_message(message) {
  return { type: types.SHOW_ALERT_MESSAGE, message }
}

export function hide_alert_message() {
  return { type: types.HIDE_ALERT_MESSAGE }
}
