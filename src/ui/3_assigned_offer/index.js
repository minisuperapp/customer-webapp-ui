import * as offersService from 'src/services/offers'
import React from 'react'
import { AssignedOffer } from './AssignedOffer'
import { views } from 'src/ui/Views'

export class AssignedOfferView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      offer: {
        deliverer: {
          name: '-',
        },
      },
      total: '-',
    }
  }

  async componentDidMount() {
    const response = await offersService.assignBestOffer(
      this.props.customerLocation,
      this.props.params.product.code,
      this.props.params.quantity,
    )
    if (response && response.success) {
      const offer = response.data
      this.setState({ offer })
      this.setState({
        total: Number(offer.unitPrice) * Number(this.props.quantity),
      })
    } else {
      alert(JSON.stringify(response.errors))
    }
  }

  changeDeliverer = async () => {
    this.props.changeView(views.CHANGE_DELIVERER, {
      productCode: this.props.params.product.code,
      quantity: this.props.params.quantity,
    })
  }

  render() {
    return <AssignedOffer {...this.props} {...this.state} changeDeliverer={this.changeDeliverer} />
  }
}
