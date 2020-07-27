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
  try {
    const browser_location = await new Promise((success, error) => {
      navigator.geolocation.getCurrentPosition(success, error)
    })
    return {
      latitude: browser_location.coords.latitude,
      longitude: browser_location.coords.longitude,
      zoom: 10,
    }
  } catch (e) {
    return {
      latitude: 23.634501,
      longitude: -102.552788,
      zoom: 3,
    }
  }
}

export const set_location = (location) => {
  localStorage.setItem('latitude', location.latitude)
  localStorage.setItem('longitude', location.longitude)
  localStorage.setItem('zoom', location.zoom)
}
