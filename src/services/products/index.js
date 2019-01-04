import _ from 'lodash'
import * as apiRequester from 'src/services/api_requester'
import { GetProductsRequest } from './requests/get_products'

export const getProducts = async () => {
  const productsRequest = new GetProductsRequest.Builder().build()
  const productsResponse = await apiRequester.send(productsRequest)
  return _.get(productsResponse, 'data.data', [])
}