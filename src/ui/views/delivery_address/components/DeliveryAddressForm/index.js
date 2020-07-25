import React from 'react'
import Style from './style'

export class DeliveryAddressForm extends React.Component {
  render() {
    return (
      <Style>
        <div className="title">Ingresa el lugar de entrega</div>
        <div className="body">
          <div className="name">
            <label htmlFor="name">Nombre</label>
            <input name="name" placeholder="Donde te entregamos?" type="text" />
          </div>
          <div className="street">
            <label htmlFor="street">Calle</label>
            <input name="street" placeholder="Calle" type="text" />
          </div>
          <div className="exterior-number">
            <label htmlFor="exterior-number">Numero Exterior</label>
            <input name="exterior-number" placeholder="Numero Exterior" type="number" />
          </div>
          <div className="interior-number">
            <label htmlFor="interior-number">Numero Interior</label>
            <input name="interior-number" placeholder="Numero Interior" type="number" />
          </div>
          <div className="neighboorhood">
            <label htmlFor="neighboorhood">Colonia</label>
            <input name="neighboorhood" placeholder="Colonia" type="text" />
          </div>
          <div className="city">
            <label htmlFor="city">Ciudad</label>
            <input name="city" placeholder="Ciudad" type="text" />
          </div>
          <div className="zip-code">
            <label htmlFor="zip-code">Codigo Postal</label>
            <input name="zip-code" placeholder="Codigo Postal" type="number" />
          </div>
          <div className="state">
            <label htmlFor="state">Estado</label>
            <input name="state" placeholder="Estado" type="text" />
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
