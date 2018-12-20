export class GetProductsRequest {
  constructor(build) {
    this.body = build
  }
  get method() {
    return 'POST'
  }
  get path() {
    return 'products'
  }
  get payload() {
    return this.body
  }
  static get Builder() {
    class Builder {
      constructor() {}
      build() {
        return new GetProductsRequest(this)
      }
    }
    return Builder
  }
}
