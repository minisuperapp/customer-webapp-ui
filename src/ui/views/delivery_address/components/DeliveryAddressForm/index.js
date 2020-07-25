import React from 'react'
import Style from './style'

export class DeliveryAddressForm extends React.Component {
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

  render() {
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
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="street">
            <label htmlFor="street">Calle</label>
            <input
              name="street"
              placeholder="Calle"
              type="text"
              value={this.state.street}
              onChange={e => this.setState({ street: e.target.value })}
            />
          </div>
          <div className="exterior-number">
            <label htmlFor="exterior-number">Numero Exterior</label>
            <input
              name="exterior-number"
              placeholder="Numero Exterior"
              type="number"
              value={this.state.exterior}
              onChange={e => this.setState({ exterior: e.target.value })}
            />
          </div>
          <div className="interior-number">
            <label htmlFor="interior-number">Numero Interior</label>
            <input
              name="interior-number"
              placeholder="Numero Interior"
              type="number"
              value={this.state.interior}
              onChange={e => this.setState({ interior: e.target.value })}
            />
          </div>
          <div className="neighboorhood">
            <label htmlFor="neighboorhood">Colonia</label>
            <input
              name="neighboorhood"
              placeholder="Colonia"
              type="text"
              value={this.state.neighboorhood}
              onChange={e => this.setState({ neighboorhood: e.target.value })}
            />
          </div>
          <div className="city">
            <label htmlFor="city">Ciudad</label>
            <input
              name="city"
              placeholder="Ciudad"
              type="text"
              value={this.state.city}
              onChange={e => this.setState({ city: e.target.value })}
            />
          </div>
          <div className="zip-code">
            <label htmlFor="zip-code">Codigo Postal</label>
            <input
              name="zip-code"
              placeholder="Codigo Postal"
              type="number"
              value={this.state.zip}
              onChange={e => this.setState({ zip: e.target.value })}
            />
          </div>
          <div className="state">
            <label htmlFor="state">Estado</label>
            <input
              name="state"
              placeholder="Estado"
              type="text"
              value={this.state.state}
              onChange={e => this.setState({ state: e.target.value })}
            />
          </div>
        </div>

        <div className="buttons">
          <button className="verify">Verifica tu Pedido</button>
          <button className="add">Añade esta Direccion</button>
        </div>
      </Style>
    )
  }
}
