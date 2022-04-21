export class OffersGroupedByProductRequest {
  constructor(build) {
    this.body = build
  }
  get method() {
    return 'POST'
  }
  get path() {
    return 'offer/search_for_all_products'
  }
  get payload() {
    return {}
  }
  static get Builder() {
    class Builder {
      build() {
        return new OffersGroupedByProductRequest(this)
      }
    }
    return Builder
  }
}
