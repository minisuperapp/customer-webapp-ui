import * as offersService from 'src/services/offers'
import React from 'react'
import { AssignedOffer } from './AssignedOffer'

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

  render() {
    return <AssignedOffer {...this.props} {...this.state}/>
  }
}
