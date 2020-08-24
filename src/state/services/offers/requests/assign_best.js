export class AssignBestOfferRequest {
  constructor(build) {
    this.body = build
  }
  get method() {
    return 'POST'
  }
  get path() {
    return 'offers/assign_best'
  }
  get payload() {
    return this.body
  }
  static get Builder() {
    class Builder {
      constructor() {
        this.products = []
        this.location = {
          latitude: '',
          longitude: '',
        }
      }
      withProductCodeAndQuantity(product_code, quantity) {
        this.products.push({
          code: product_code,
          quantity: quantity,
        })
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
        return new AssignBestOfferRequest(this)
      }
    }
    return Builder
  }
}
