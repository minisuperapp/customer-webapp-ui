module.exports = {
  API_HOST: 'http://ec2-18-224-82-149.us-east-2.compute.amazonaws.com:3000',
  get API_URL() {
    return `${this.API_HOST}/api`
  },
  mocks: {
    customerLocation: {
      latitude: '28.1867048',
      longitude: '-105.4600849'
    }
  }
}
