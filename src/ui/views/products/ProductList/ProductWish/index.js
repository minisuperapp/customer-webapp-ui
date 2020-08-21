import React, { Component } from 'react'
import { connect } from 'react-redux'
import Style from './style'
import { add_product_wish_request } from 'src/state/actions/product_wish_actions'

export class ProductWish extends Component {
  state = {
    done: false,
    description: '',
  }

  on_description_change = event => {
    this.setState({
      description: event.target.value,
    })
  }

  handle_product_wish = () => {
    const { add_product_wish_request } = this.props
    add_product_wish_request(this.state.description, () => {
      this.setState({
        done: true,
      })
    })
  }

  render() {
    if (this.state.done) {
      return (
        <Style>
          <div className="title">Listo!</div>
          <div className="subtitle">Tu petición será revisada.</div>
        </Style>
      )
    }
    return (
      <Style>
        <div className="title">¿No encuentras tu producto?</div>
        <div className="subtitle">Descríbelo debajo y lo agregaremos a la lista.</div>
        <textarea
          value={this.state.description}
          onChange={this.on_description_change}
          rows={1}
          className="description"
        />
        <button onClick={this.handle_product_wish}>Enviar</button>
      </Style>
    )
  }
}

function mapStateToProps() {
  return {}
}

const mapDispatchToProps = {
  add_product_wish_request,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductWish)
