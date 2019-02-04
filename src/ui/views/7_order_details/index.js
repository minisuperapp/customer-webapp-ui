import React from 'react'
import { OrderDetails } from './OrderDetails'

export class OrderDetailsView extends React.Component {
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
