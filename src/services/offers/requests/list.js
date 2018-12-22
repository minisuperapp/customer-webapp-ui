export class ListOffersRequest {
  constructor(build) {
    this.body = build
  }
  get method() {
    return 'POST'
  }
  get path() {
    return 'offers/list'
  }
  get payload() {
    return this.body
  }
  static get Builder() {
    class Builder {
      constructor() {
        this.productCode = ''
        this.quantity = ''
        this.customerLocation = {
          latitude: '',
          longitude: '',
        }
      }
      withProductCode(productCode) {
       this.productCode = productCode
       return this
      }
      withQuantity(quantity) {
       this.quantity = quantity
       return this
      }
      withCustomerLocationLatitude(latitude) {
        this.customerLocation.latitude = latitude
        return this
      }
      withCustomerLocationLongitude(longitude) {
        this.customerLocation.longitude = longitude
        return this
      }
      build() {
        return new ListOffersRequest(this)
      }
    }
    return Builder
  }
}
