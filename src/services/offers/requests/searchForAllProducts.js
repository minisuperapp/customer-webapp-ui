export class OffersGroupedByProductRequest {
  constructor(build) {
    this.body = build
  }
  get method() {
    return 'POST'
  }
  get path() {
    return 'offers/searchForAllProducts'
  }
  get payload() {
    return this.body
  }
  static get Builder() {
    class Builder {
      constructor() {
        this.customerLocation = {
          latitude: '',
          longitude: '',
        }
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
        return new OffersGroupedByProductRequest(this)
      }
    }
    return Builder
  }
}
