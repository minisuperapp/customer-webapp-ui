import React from 'react'
import { OrderInfo } from 'src/ui/views/common/components/OrderInfo'
import io from 'socket.io-client'
import config from 'src/config'
import Style from './style'
import * as offersService from '../../../state/services/offers'

class OrderView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 'STARTED',
    }
  }

  goToProducts = () => {
    const { history } = this.props
    history.push('/products')
  }

  async componentDidMount() {
    this.socket = io(config.API_HOST, config.socketPayload)
    this.socket.emit('subscribe_for_order_updates', this.props.params.order.id)
    this.socket.on('update_order_status', (data) => {
      this.setState({ status: data.status })
    })
  }

  render() {
    return (
      <Style>
        <OrderInfo {...this.props} {...this.state} />
        <div className="buttonContainer">
          <button className="backButton" onClick={this.goToProducts}>
            Ver lista de productos
          </button>
        </div>
      </Style>
    )
  }
}

export default OrderView
