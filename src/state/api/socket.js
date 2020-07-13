import io from 'socket.io-client'
import config from 'src/config'

export const connect = () => {
  return io(config.API_URL)
}
