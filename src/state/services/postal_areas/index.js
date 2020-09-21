import * as apiRequester from '../../api'

export async function get_by_state_county({ state, county }) {
  const request = {
    method: 'post',
    path: 'postal_area/get_by_state_county',
    payload: { state, county },
  }
  const response = await apiRequester.send(request)
  return response.data
}
