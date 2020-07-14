export const get_location = async () => {
  try {
    const location = await get_position()
    return {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    }
  } catch (e) {
    alert('Enable your location.')
  }
}

const get_position = () => {
  return new Promise((success, error) => {
    navigator.geolocation.getCurrentPosition(success, error)
  })
}
