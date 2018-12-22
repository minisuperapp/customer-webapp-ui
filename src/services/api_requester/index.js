import axios from 'axios'
import config from 'src/config'
import cookie from 'cookie'

export const send = async (request) => {
  const info = {
    method: request.method,
    url: config.API_URL + '/' + request.path,
    data: JSON.stringify(request.payload),
    headers: {
      'Content-Type': 'application/json',
      'customer-code': localStorage.getItem('customerCode'),
      'is-test': 'true',
    }
  }
  console.log('request: ', info)
  try {
    const response = await axios(info)
    await setCustomerCode(response)
    console.log('response: ', response)
    return response
  } catch (err) {
    console.log(request.uri + '/' + request.path, info)
    console.log(err)
  }
}

async function setCustomerCode(res) {
  if (res.headers && res.headers['set-cookie']) {
    const foundCookie = res.headers['set-cookie'].find(c => c.startsWith('customer-code'))
    if (foundCookie) {
      const customerCode = cookie.parse(foundCookie)['customer-code']
      await localStorage.setItem('customerCode', customerCode)
    }
  }
}