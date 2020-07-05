import React from 'react'
import { OrderInfo } from 'src/ui/views/common/components/OrderInfo'
import io from 'socket.io-client'
import config from 'src/config'
import css from './styles.module.css'

class OrderView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 'STARTED',
    }
  }

  goToProducts = () => {
    // this.props.changeView(views.PRODUCTS)
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
      <div>
        <OrderInfo {...this.props} {...this.state} />
        <div className={css.buttonContainer}>
          <button className={css.backButton} onClick={this.goToProducts}>
            Ver lista de productos
          </button>
        </div>
      </div>
    )
  }
}

export default OrderView
