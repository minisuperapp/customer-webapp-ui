import React from 'react'
import {DeliveryAddressForm} from './components/DeliveryAddressForm'
import {connect} from 'react-redux'

class DeliveryAddressView extends React.Component {
  render() {
    return <DeliveryAddressForm />
  }
}

function mapStateToProps() {}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryAddressView)
