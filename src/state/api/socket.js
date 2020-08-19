import io from 'socket.io-client'
import config from 'src/config'

export const connect = () => {
  return io(config.SOCKET_HOST, { path: '/comprar/api/socket.io/' })
}
