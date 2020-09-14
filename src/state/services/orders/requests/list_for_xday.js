export class ListForXdayRequest {
  constructor(build) {
    this.body = build
  }
  get method() {
    return 'POST'
  }
  get path() {
    return 'orders/list_for_xday'
  }
  get payload() {
    return this.body
  }
  static get Builder() {
    class Builder {
      constructor() {
        this.xday = 0
      }
      withXday(xday) {
        this.xday = xday
        return this
      }
      build() {
        return new ListForXdayRequest(this)
      }
    }
    return Builder
  }
}
