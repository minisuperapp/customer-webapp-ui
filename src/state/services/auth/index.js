import * as apiRequester from '../../api'

export async function register_customer(data) {
  const request = {
    method: 'post',
    path: 'register',
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
