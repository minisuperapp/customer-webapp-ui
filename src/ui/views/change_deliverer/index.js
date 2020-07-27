import React from 'react'
import * as offersService from 'src/state/services/offers'
import { ChangeDeliverer } from './ChangeDeliverer'
import { paths } from 'src/constants'

class ChangeDelivererView extends React.Component {

  goToAssignedOffer = () => {
    const { history } = this.props
    history.push(paths.assigned_offer)
  }

  async componentDidMount() {
    const serviceResponse = await offersService.searchForOneProduct(
      this.state.location,
      this.props.params.product_code,
      this.props.params.quantity,
    )
    this.setState({ offers: serviceResponse.data })
  }

  _getPosition = () => {
    return new Promise((success, error) => {
      navigator.geolocation.getCurrentPosition(success, error)
    })
  }

  render() {
    return <ChangeDeliverer {...this.state} goToAssignedOffer={this.goToAssignedOffer} />
  }
}

export default ChangeDelivererView
