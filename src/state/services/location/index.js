import * as apiRequester from '../../api'

export const get_location = async () => {
  const latitude = localStorage.getItem('latitude')
  const longitude = localStorage.getItem('longitude')
  const zoom = localStorage.getItem('zoom')
  if (latitude && longitude) {
    return {
      latitude,
      longitude,
      zoom: zoom || '3',
    }
  }
  const browser_location = await new Promise((success, error) => {
    navigator.geolocation.getCurrentPosition(success, error)
  })
  return {
    latitude: browser_location.coords.latitude,
    longitude: browser_location.coords.longitude,
    zoom: 10,
  }
}

export const set_location = location => {
  localStorage.setItem('latitude', location.latitude)
  localStorage.setItem('longitude', location.longitude)
  localStorage.setItem('zoom', location.zoom)
}

export async function add_customer() {
  const request = {
    method: 'post',
    path: 'add_customer_location',
    payload: {},
  }
  const response = await apiRequester.send(request)
  return response
}
