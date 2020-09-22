import * as apiRequester from '../../api'

export const set_location = location => {
  const request = {
    method: 'post',
    path: 'location/set_location',
    payload: location,
  }
  return apiRequester.send(request)
}

export const set_postal_area = postal_area => {
  const request = {
    method: 'post',
    path: 'location/set_postal_area',
    payload: postal_area,
  }
  return apiRequester.send(request)
}
