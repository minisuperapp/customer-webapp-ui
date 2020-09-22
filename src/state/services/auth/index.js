import * as apiRequester from '../../api'

export async function get_profile(payload) {
  const request = {
    method: 'post',
    path: 'get_profile',
    payload,
  }
  const response = await apiRequester.send(request)
  return response.data
}

export async function save_email_phone(payload) {
  const request = {
    method: 'post',
    path: 'save_email_phone',
    payload,
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
