module.exports = {
  get API_HOST() {
    return process.env.API_HOST
  },
  get SOCKET_HOST() {
    return process.env.SOCKET_HOST
  },
  get API_URL() {
    return `${this.API_HOST}/api`
  },
  get isTestEnv() {
    return !(
      /^https:\/\/www\.minisuper\.app\/comprar/i.test(window.location.href) ||
      /^https:\/\/minisuper\.app\/comprar/i.test(window.location.href)
    )
  },
  get isApiHostProd() {
    return (
      /^https:\/\/www\.minisuper\.app\/customer_api/.test(this.API_HOST) ||
      /^https:\/\/minisuper\.app\/customer_api/.test(this.API_HOST)
    )
  },
  get socketPayload() {
    const payload = {}
    if (this.isTestEnv) {
      payload.query = 'is-test=true'
    }
    return payload
  },
  get socket_path() {
    if (this.isTestEnv) {
      return ''
    }
    return '/customer_api/socket.io/'
  },
}
