import axios from 'axios'
import config from 'src/config'

export const send = async (request) => {
  let headers = {
    'Content-Type': 'application/json',
  }
  if (config.isTestEnv) {
    headers = {
      ...headers,
      'is-test': 'true',
    }
  }
  const info = {
    method: request.method,
    url: config.API_URL + '/' + request.path,
    data: JSON.stringify(request.payload),
    withCredentials: true,
    headers,
  }
  return axios(info)
}
