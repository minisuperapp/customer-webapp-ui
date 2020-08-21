import * as apiRequester from '../../api'

export async function add_product_wish(product_wish) {
  const {
    description,
    location: { latitude, longitude },
  } = product_wish
  const request = {
    method: 'post',
    path: 'product_wish/add',
    payload: { description, latitude, longitude },
  }
  const response = await apiRequester.send(request)
  return response.data
}
