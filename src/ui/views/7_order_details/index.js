import React from 'react'
import { OrderDetails } from './OrderDetails'

class OrderDetailsView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
    }
  }
  async componentDidMount() {
  }
  render() {
    return <OrderDetails {...this.state} />
  }
}

export default OrderDetailsView
