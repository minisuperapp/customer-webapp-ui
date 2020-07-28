export class OffersGroupedByProductRequest {
  constructor(build) {
    this.body = build
  }
  get method() {
    return 'POST'
  }
  get path() {
    return 'offers/search_for_all_products'
  }
  get payload() {
    return this.body
  }
  static get Builder() {
    class Builder {
      constructor() {
        this.location = {
          latitude: '',
          longitude: '',
        }
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
        return new OffersGroupedByProductRequest(this)
      }
    }
    return Builder
  }
}
