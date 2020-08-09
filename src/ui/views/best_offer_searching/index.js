import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { SearchingMessage } from './SearchingMessage'
import { assign_best_offer_request } from 'src/state/actions/offer_actions'
import { paths } from 'src/constants'

class BestOfferSearchingView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: null,
    }
  }
  componentDidMount() {
    const { history, cart, assign_best_offer_request } = this.props
    assign_best_offer_request(
      {
        product_code: cart.product.code,
        quantity: cart.quantity,
      },
      () => {
        history.push(paths.assigned_offer)
      },
      errors => {
        this.setState({ errors })
      },
    )
  }

  render() {
    const { errors } = this.state
    if (errors && errors.length) {
      alert(errors[0].message)
      return <Redirect to={paths.quantity} />
    }
    return <SearchingMessage />
  }
}

function mapStateToProps(state) {
  const { cart } = state
  return {
    cart,
  }
}

const mapDispatchToProps = {
  assign_best_offer_request,
}

export default connect(mapStateToProps, mapDispatchToProps)(BestOfferSearchingView)
