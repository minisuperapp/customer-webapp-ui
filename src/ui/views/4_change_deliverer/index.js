import React from 'react'
import * as offersService from 'src/services/offers/index'
import { ChangeDeliverer } from './ChangeDeliverer/index'
import { views } from 'src/ui/views/index'

export class ChangeDelivererView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      offers: [],
    }
  }
    
  goToAssignedOffer = () => {
    this.props.changeView(views.ASSIGNED_OFFER)
  }

  async componentDidMount() {
    const serviceResponse = await offersService.searchForOneProduct(
      this.props.customerLocation,
      this.props.params.productCode,
      this.props.params.quantity,
    )
    this.setState({ offers: serviceResponse.data })
  }

  render() {
    return <ChangeDeliverer {...this.state}
        goToAssignedOffer={this.goToAssignedOffer}/>
  }
}
