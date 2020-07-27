import React from 'react'
import { get_product_offers_request } from 'src/state/actions/offer_actions'
import { ChangeDeliverer } from './ChangeDeliverer'
import { paths } from 'src/constants'
import { connect } from 'react-redux'

class ChangeDelivererView extends React.Component {
  goToAssignedOffer = () => {
    const { history } = this.props
    history.push(paths.assigned_offer)
  }

  async componentDidMount() {
    const { get_product_offers_request, cart } = this.props
    get_product_offers_request({ product_code: cart.product.code, quantity: cart.quantity })
  }

  render() {
    return <div>Change deliverer</div>
  }
}

function mapStateToProps(state) {
  const { cart } = state
  return {
    cart,
  }
}

const mapDispatchToProps = {
  get_product_offers_request,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeDelivererView)
