import { place_order_request } from 'src/state/actions/order_actions'
import { assign_best_offer_request } from 'src/state/actions/offer_actions'
import React from 'react'
import { AssignedOfferForm } from './components/AssignedOfferForm'
import { connect } from 'react-redux'
import { paths } from 'src/constants'

class AssignedOfferView extends React.Component {
  async componentDidMount() {
    const { cart, assign_best_offer_request } = this.props
    assign_best_offer_request({
      product_code: cart.product.code,
      quantity: cart.quantity,
    })
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
    const { cart, place_order_request } = this.props
    place_order_request({
      customerLocation: this.state.location,
      offerId: this.state.offer.id,
      quantity: cart.quantity,
    })
  }

  onCancel = async () => {
    const { history } = this.props
    history.push(paths.quantity)
  }

  render() {
    const { cart, offer, total } = this.props
    return (
      <AssignedOfferForm
        cart={cart}
        offer={offer}
        total={total}
        changeDeliverer={this.changeDeliverer}
        order={this.order}
        onCancel={this.onCancel}
      />
    )
  }
}

function mapStateToProps(state) {
  const {
    cart,
    offers: { assigned },
  } = state

  const total = Number(assigned.unitPrice) * Number(assigned.quantity)
  return {
    cart,
    offer: assigned,
    total,
  }
}

const mapDispatchToProps = {
  place_order_request,
  assign_best_offer_request,
}

export default connect(mapStateToProps, mapDispatchToProps)(AssignedOfferView)
