import { place_order_request } from 'src/state/actions/order_actions'
import { assign_best_offer_request } from 'src/state/actions/offer_actions'
import React from 'react'
import { AssignedOfferForm } from './AssignedOfferForm'
import { connect } from 'react-redux'
import { paths } from 'src/constants'

class AssignedOfferView extends React.Component {
  async componentDidMount() {
    const { cart, assign_best_offer_request } = this.props
    if (!cart.offer.id) {
      assign_best_offer_request({
        product_code: cart.product.code,
        quantity: cart.quantity,
      })
    }
  }

  changeDeliverer = async () => {
    const { history } = this.props
    history.push(paths.change_deliverer)
  }

  order = async () => {
    const { cart, place_order_request } = this.props
    const offer = cart.offer
    place_order_request({
      offerId: offer.code,
      quantity: cart.quantity,
    })
  }

  onCancel = async () => {
    const { history } = this.props
    history.push(paths.quantity)
  }

  render() {
    const { cart, total } = this.props
    const offer = cart.offer
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
  const { cart } = state
  const total = Number(cart.offer.unit_price) * Number(cart.quantity)
  return {
    cart,
    total,
  }
}

const mapDispatchToProps = {
  place_order_request,
  assign_best_offer_request,
}

export default connect(mapStateToProps, mapDispatchToProps)(AssignedOfferView)
