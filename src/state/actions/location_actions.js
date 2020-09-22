import * as types from './action_types'

export const set_postal_area_request = (postal_area, on_success) => ({
  type: types.SET_POSTAL_AREA_REQUEST,
  postal_area,
  on_success,
})

export const set_postal_area_response = response => ({
  type: types.SET_POSTAL_AREA_RESPONSE,
  response,
})

export const set_location_request = (location, on_success) => ({
  type: types.SET_LOCATION_REQUEST,
  location,
  on_success,
})

export const set_location_response = (location) => ({
  type: types.SET_LOCATION_RESPONSE,
  location,
})
