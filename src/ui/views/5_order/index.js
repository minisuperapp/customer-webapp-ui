import React from 'react'
import { Order } from './Order/index'
import io from 'socket.io-client'
import config from 'src/config'

export class OrderView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 'STARTED',
    }
  }
  async componentDidMount() {
    this.socket = io(config.API_HOST, { query: 'is-test=true' })
    this.socket.emit('subscribe_for_order_updates', this.props.params.order.id)
    this.socket.on('update_order_status', (data) => {
      this.setState({ status: data.status })
    })
  }
  render() {
    return <Order {...this.props} {...this.state} />
  }
}
