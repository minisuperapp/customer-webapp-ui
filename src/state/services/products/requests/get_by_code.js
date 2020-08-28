export class GetProductByCodeRequest {
  constructor(build) {
    this.body = build
  }
  get method() {
    return 'POST'
  }
  get path() {
    return 'product/get_by_code'
  }
  get payload() {
    return this.body
  }
  static get Builder() {
    class Builder {
      constructor() {
        this.code = null
      }
      withCode(code) {
        this.code = code
        return this
      }
      build() {
        return new GetProductByCodeRequest(this)
      }
    }
    return Builder
  }
}
