import React from 'react'

import Provider from './Provider'

export class ChangeDeliverer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.offers.length
          ? this.props.offers.map((o) => (<Provider offer={o} key={o.id} />))
          : 'Buscando repartidores...'}
      </div>
    )
  }
}
