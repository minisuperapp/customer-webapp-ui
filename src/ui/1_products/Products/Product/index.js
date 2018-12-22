import React from 'react'

export class Product extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
          {this.props.name} - ${this.props.lowestPrice}

        </div>
    )
  }
}
