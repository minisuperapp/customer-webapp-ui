import _ from 'lodash'
import * as apiRequester from '../../api'
import { GetProductsRequest } from './requests/get_products'
import { SearchProductsRequest } from './requests/search_products'

export const get_products = async () => {
  const productsRequest = new GetProductsRequest.Builder().build()
  const productsResponse = await apiRequester.send(productsRequest)
  return _.get(productsResponse, 'data.data', [])
}

export const search_products = async query => {
  const productsRequest = new SearchProductsRequest.Builder().withQuery(query).build()
  const productsResponse = await apiRequester.send(productsRequest)
  return _.get(productsResponse, 'data.data', [])
}
