import * as offersService from 'src/state/services/offers'
import {place_order_request} from 'src/state/actions/order_actions'
import React from 'react'
import {AssignedOfferForm} from './components/AssignedOfferForm'
import {connect} from 'react-redux'
import { paths } from 'src/constants'

class AssignedOfferView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      offer: {
        deliverer: {
          name: 'Buscando...',
        },
      },
      total: '...',
      location: {
        latitude: '',
        longitude: '',
      },
    }
  }

  async componentDidMount() {
    const {cart} = this.props
    const location = await this._getPosition()
    this.setState({
      location: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
    })
    const response = await offersService.assignBestOffer(
      this.state.location,
      cart.product.code,
      cart.quantity,
    )
    if (response && response.success) {
      const offer = response.data
      this.setState({offer})
      this.setState({
        total: Number(offer.unitPrice) * Number(cart.quantity),
      })
    } else {
      alert(JSON.stringify(response.errors))
    }
  }

  _getPosition = () => {
    return new Promise((success, error) => {
      navigator.geolocation.getCurrentPosition(success, error)
    })
  }

  changeDeliverer = async () => {
    // this.props.changeView(views.CHANGE_DELIVERER, {
    //   product_code: this.props.params.product.code,
    //   quantity: this.props.params.quantity,
    // })
  }

  order = async () => {
    const {cart, place_order_request} = this.props
    place_order_request({
      customerLocation: this.state.location,
      offerId: this.state.offer.id,
      quantity: cart.quantity
    })
  }

  onCancel = async () => {
    const {history} = this.props
    history.push(paths.quantity)
  }

  render() {
    const {cart} = this.props
    return (
      <AssignedOfferForm
        cart={cart}
        offer={this.state.offer}
        total={this.state.total}
        changeDeliverer={this.changeDeliverer}
        order={this.order}
        onCancel={this.onCancel}
      />
    )
  }
}

function mapStateToProps(state) {
  const {cart} = state
  return {
    cart,
  }
}

const mapDispatchToProps = {
  place_order_request
}

export default connect(mapStateToProps, mapDispatchToProps)(AssignedOfferView)
