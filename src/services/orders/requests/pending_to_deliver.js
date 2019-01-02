export class PendingToDeliverRequest {
  get method() {
    return 'POST'
  }
  get path() {
    return 'orders/list_pending_to_deliver'
  }
  get payload() {
    return {}
  }
  static get Builder() {
    class Builder {
      build() {
        return new PendingToDeliverRequest(this)
      }
    }
    return Builder
  }
}
