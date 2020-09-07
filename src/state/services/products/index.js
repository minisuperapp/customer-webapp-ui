import _get from 'lodash.get'
import * as apiRequester from '../../api'
import { GetProductsRequest } from './requests/get_products'
import { GetProductByCodeRequest } from './requests/get_by_code'

export const get_product_by_code = async code => {
  const request = new GetProductByCodeRequest.Builder().withCode(code).build()
  const response = await apiRequester.send(request)
  return _get(response, 'data.data', {})
}

export const get_products = async () => {
  const request = new GetProductsRequest.Builder().build()
  const response = await apiRequester.send(request)
  return _get(response, 'data.data', [])
}
