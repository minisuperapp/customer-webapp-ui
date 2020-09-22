import * as types from './action_types'

export const get_location_request = on_success => ({
  type: types.GET_LOCATION_REQUEST,
  on_success,
})

export function get_location_response(location) {
  return { type: types.GET_LOCATION_RESPONSE, location }
}

export const set_location = (location, on_success) => ({
  type: types.SET_LOCATION_REQUEST,
  location,
  on_success,
})

export const set_postal_area_request = (postal_area, on_success) => ({
  type: types.SET_POSTAL_AREA_REQUEST,
  postal_area,
  on_success,
})

export const set_postal_area_response = response => ({
  type: types.SET_POSTAL_AREA_RESPONSE,
  response,
})
