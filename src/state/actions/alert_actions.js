import * as types from './action_types'

export function show_alert_message(properties, on_accept) {
  return { type: types.SHOW_ALERT_MESSAGE, properties, on_accept }
}

export function hide_alert_message() {
  return { type: types.HIDE_ALERT_MESSAGE }
}

export function hide_no_offers_alert() {
  return { type: types.HIDE_NO_OFFERS_ALERT }
}
