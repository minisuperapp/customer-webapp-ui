import React from 'react'
import { views } from 'src/ui/Views'
import * as offersService from 'src/services/offers'
import { ChangeDeliverer } from './ChangeDeliverer'

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
