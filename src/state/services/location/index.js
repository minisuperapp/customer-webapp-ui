import * as apiRequester from '../../api'

export const set_location = async location => {
  const request = {
    method: 'post',
    path: 'location/set_location',
    payload: location,
  }
  return apiRequester.send(request)
}

export const set_postal_area = async postal_area => {
  const request = {
    method: 'post',
    path: 'location/set_postal_area',
    payload: postal_area,
  }
  const response = await apiRequester.send(request)
  return response.data
}
