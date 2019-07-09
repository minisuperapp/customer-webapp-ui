module.exports = {
  API_HOST: 'https://www.minisuper.app/buy/api/',
  // API_HOST: 'http://localhost:3000',
  get API_URL() {
    return `${this.API_HOST}/api`
  },
  get isTestEnv() {
    return !(
      /^https:\/\/www\.minisuper\.app\/buy/.test(window.location.href) ||
      /^https:\/\/minisuper\.app\/buy/.test(window.location.href)
    )
  },
}
