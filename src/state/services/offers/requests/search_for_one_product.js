export class SearchOffersForOneProductRequest {
  constructor(build) {
    this.body = build
  }
  get method() {
    return 'POST'
  }
  get path() {
    return 'offers/search_for_one_product'
  }
  get payload() {
    return this.body
  }
  static get Builder() {
    class Builder {
      constructor() {
        this.product_code = ''
        this.quantity = ''
        this.location = {
          latitude: '',
          longitude: '',
        }
      }
      withProductCode(product_code) {
       this.product_code = product_code
       return this
      }
      withQuantity(quantity) {
       this.quantity = quantity
       return this
      }
      withCustomerLocationLatitude(latitude) {
        this.location.latitude = latitude
        return this
      }
      withCustomerLocationLongitude(longitude) {
        this.location.longitude = longitude
        return this
      }
      build() {
        return new SearchOffersForOneProductRequest(this)
      }
    }
    return Builder
  }
}
