import * as apiRequester from '../../api'

export async function get_profile(data) {
  const request = {
    method: 'post',
    path: 'get_profile',
    payload: { ...data },
  }
  const response = await apiRequester.send(request)
  return response.data
}

export async function login_customer(credentials) {
  const request = {
    method: 'post',
    path: 'login',
    payload: credentials,
  }
  const response = await apiRequester.send(request)
  return response.data
}
