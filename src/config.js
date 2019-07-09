module.exports = {
  API_HOST: 'http://52.9.38.193:3000',
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
