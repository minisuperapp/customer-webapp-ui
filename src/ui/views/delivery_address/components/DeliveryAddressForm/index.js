import React from 'react'
import { connect } from 'react-redux'
import Style from './style'
import { paths } from 'src/constants'

class DeliveryAddressForm extends React.Component {
  state = {
    name: '',
    street: '',
    exterior: '',
    interior: '',
    neighboorhood: '',
    city: '',
    zip: '',
    state: '',
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

  go_to_verify_order = () => {
    const { history } = this.props
    history.push(paths.assigned_offer)
  }

  on_accept = () => {
    const { history } = this.props
  }

  render() {
    const { name, street, exterior, interior, neighboorhood, city, zip, state } = this.state
    return (
      <Style>
        <div className="title">Ingresa el lugar de entrega</div>
        <div className="body">
          <div className="name">
            <label htmlFor="name">Nombre</label>
            <input
              name="name"
              placeholder="Donde te entregamos?"
              type="text"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div className="street">
            <label htmlFor="street">Calle</label>
            <input
              name="street"
              placeholder="Calle"
              type="text"
              value={street}
              onChange={this.handleChange}
            />
          </div>
          <div className="exterior-number">
            <label htmlFor="exterior-number">Numero Exterior</label>
            <input
              name="exterior"
              placeholder="Numero Exterior"
              type="number"
              value={exterior}
              onChange={this.handleChange}
            />
          </div>
          <div className="interior-number">
            <label htmlFor="interior-number">Numero Interior</label>
            <input
              name="interior"
              placeholder="Numero Interior"
              type="number"
              value={interior}
              onChange={this.handleChange}
            />
          </div>
          <div className="neighboorhood">
            <label htmlFor="neighboorhood">Colonia</label>
            <input
              name="neighboorhood"
              placeholder="Colonia"
              type="text"
              value={neighboorhood}
              onChange={this.handleChange}
            />
          </div>
          <div className="city">
            <label htmlFor="city">Ciudad</label>
            <input
              name="city"
              placeholder="Ciudad"
              type="text"
              value={city}
              onChange={this.handleChange}
            />
          </div>
          <div className="zip-code">
            <label htmlFor="zip-code">Codigo Postal</label>
            <input
              name="zip"
              placeholder="Codigo Postal"
              type="number"
              value={zip}
              onChange={this.handleChange}
            />
          </div>
          <div className="state">
            <label htmlFor="state">Estado</label>
            <input
              name="state"
              placeholder="Estado"
              type="text"
              value={state}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="btn">
          <button className="add">Añade esta Direccion</button>
        </div>
      </Style>
    )
  }
}

function mapStateToProps() {}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryAddressForm)
