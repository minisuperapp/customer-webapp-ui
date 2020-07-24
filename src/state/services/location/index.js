export const get_location = async () => {
  // try {
  //   const location = await get_position()
  //   return {
  //     latitude: location.coords.latitude,
  //     longitude: location.coords.longitude,
  //   }
  // } catch (e) {
  //   return {
  //     latitude: '28.1874198',
  //     longitude: '-105.4671407',
  //   }
  // }
  return {
    latitude: '28.1874198',
    longitude: '-105.4671407',
  }
}

// const get_position = () => {
//   return new Promise((success, error) => {
//     navigator.geolocation.getCurrentPosition(success, error)
//   })
// }
