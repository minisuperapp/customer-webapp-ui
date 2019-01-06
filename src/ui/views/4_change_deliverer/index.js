import React from 'react'
import { index } from 'src/ui/views/index'
import * as offersService from 'src/services/offers/index'
import { ChangeDeliverer } from './ChangeDeliverer/index'

export class ChangeDelivererView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      offers: [],
    }
  }

  async componentDidMount() {
    const serviceResponse = await offersService.getOffers(
      this.props.customerLocation,
      this.props.params.productCode,
      this.props.params.quantity,
    )
    this.setState({ offers: serviceResponse.data })
  }

  render() {
    return <ChangeDeliverer {...this.state}/>
  }
}
