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
      /^https:\/\/www\.minisuper\.app\/comprar/.test(window.location.href) ||
      /^https:\/\/minisuper\.app\/comprar/.test(window.location.href) ||
      /^https:\/\/minisuper-customer-webapp-ui\.herokuapp\.com/.test(window.location.href)
    )
  },
  get isApiHostProd() {
    return (
      /^https:\/\/www\.minisuper\.app\/comprar\/api/.test(this.API_HOST) ||
      /^https:\/\/minisuper\.app\/comprar\/api/.test(this.API_HOST) ||
      /^https:\/\/minisuper-customer-api\.herokuapp\.com/.test(this.API_HOST)
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
    return '/comprar/api/socket.io/'
  },
}
