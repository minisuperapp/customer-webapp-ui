import * as apiRequester from '../../api'

export async function add_customer_address(customer_address) {
  const request = {
    method: 'post',
    path: 'addresses/add',
    payload: customer_address,
  }
  return apiRequester.send(request)
}
