import React from 'react'
import Style from './style'

class DeliveryAddressForm extends React.Component {
  render() {
    const { name, street, number, location, handleChange, on_accept, on_cancel } = this.props

    return (
      <Style>
        <div className="title">Ingresa el lugar de entrega</div>
        <div className="body">
          <div className="name">
            <label htmlFor="name">Tipo de lugar</label>
            <input
              className="field"
              name="name"
              placeholder="ej. casa, oficina, taller"
              type="text"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="street">
            <label htmlFor="street">Calle</label>
            <input
              className="field"
              name="street"
              placeholder="calle"
              type="text"
              value={street}
              onChange={handleChange}
            />
          </div>
          <div className="exterior-number">
            <label htmlFor="number">Número</label>
            <input
              className="field"
              name="number"
              placeholder="número exterior"
              type="number"
              value={number}
              onChange={handleChange}
            />
          </div>
          <div className="neighboorhood">
            <label htmlFor="neighborhood">Colonia</label>
            <input
              className="field"
              disabled={true}
              name="neighborhood"
              type="text"
              value={location.postal_area_name}
            />
          </div>
          <div className="city">
            <label htmlFor="city">Ciudad</label>
            <input
              className="field"
              name="city"
              type="text"
              disabled={true}
              value={location.postal_area_county}
            />
          </div>
          <div className="zip-code">
            <label htmlFor="postal_code">Código Postal</label>
            <input
              className="field"
              name="postal_code"
              type="number"
              disabled={true}
              value={location.postal_area_code}
            />
          </div>
        </div>

        <div className="button_container">
          <button className="cancel_button" onClick={on_cancel}>
            Cancelar
          </button>
          <button className="accept_button" onClick={on_accept}>
            Aceptar
          </button>
        </div>
      </Style>
    )
  }
}

export default DeliveryAddressForm
