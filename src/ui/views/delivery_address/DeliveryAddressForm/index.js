import React from 'react'
import Style from './style'

class DeliveryAddressForm extends React.Component {
  render() {
    const {
      handleChange,
      on_accept,
      name,
      street,
      number,
      //apartment_number,
      neighborhood,
      city,
      postal_code,
      //state,
    } = this.props

    return (
      <Style>
        <div className="title">Ingresa el lugar de entrega</div>
        <div className="body">
          <div className="name">
            <label htmlFor="name">Tipo de lugar</label>
            <input
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
              name="neighborhood"
              placeholder="colonia"
              type="text"
              value={neighborhood}
              onChange={handleChange}
            />
          </div>
          <div className="city">
            <label htmlFor="city">Ciudad</label>
            <input
              name="city"
              placeholder="ciudad"
              type="text"
              value={city}
              onChange={handleChange}
            />
          </div>
          <div className="zip-code">
            <label htmlFor="postal_code">Código Postal</label>
            <input
              name="postal_code"
              placeholder="código postal"
              type="number"
              value={postal_code}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="btn">
          <button className="accept_button" onClick={on_accept}>
            Agregar lugar de entrega
          </button>
        </div>
      </Style>
    )
  }
}

export default DeliveryAddressForm
