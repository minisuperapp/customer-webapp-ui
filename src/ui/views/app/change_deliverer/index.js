import React from 'react'
import { get_product_offers_request, change_offer_request } from 'src/state/actions/offer_actions'
import { ChangeDeliverer } from './ChangeDeliverer'
import { paths } from 'src/constants'
import { connect } from 'react-redux'

class ChangeDelivererView extends React.Component {
  cancel = () => {
    const { history } = this.props
    history.push(paths.app.checkout)
  }

  onChangeOffer = offer => {
    const { change_offer_request } = this.props
    change_offer_request(offer, () => {
      const { history } = this.props
      history.push(paths.app.checkout)
    })
  }

  async componentDidMount() {
    const { get_product_offers_request, cart } = this.props
    get_product_offers_request({ product_code: cart.product.code, quantity: cart.quantity })
  }

  render() {
    const { cart } = this.props
    return (
      <ChangeDeliverer
        cancel={this.cancel}
        onChangeOffer={this.onChangeOffer}
        offers={Object.values(cart.product_offers)}
      />
    )
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
  change_offer_request,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeDelivererView)
