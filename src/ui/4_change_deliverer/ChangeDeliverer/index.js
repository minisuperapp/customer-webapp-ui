import React from 'react'

export class ChangeDeliverer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.offers.length
          ? this.props.offers.map((o) => o.deliverer.name)
          : 'Buscando repartidores...'}
      </div>
    )
  }
}
