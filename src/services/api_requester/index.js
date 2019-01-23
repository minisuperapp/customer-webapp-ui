import axios from 'axios'
import config from 'src/config'

export const send = async (request) => {
  let headers = {
    'Content-Type': 'application/json'
  }
  if (isTestEnv()) {
  headers = {
    ...headers,
    'is-test': 'true'
  }
  const info = {
    method: request.method,
    url: config.API_URL + '/' + request.path,
    data: JSON.stringify(request.payload),
    withCredentials: true,
    headers
  }
  console.log('request: ', info)
  try {
    const response = await axios(info)
    console.log('response: ', response)
    return response
  } catch (err) {
    console.log(request.uri + '/' + request.path, info)
    console.log(err)
  }
}

function isTestEnv() {
  return !(/^https:\/\/www\.minisuper\.app\/sell/.test(window.location.href) ||
    /^https:\/\/minisuper\.app\/sell/.test(window.location.href))
}