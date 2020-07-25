import React from 'react'
import Style from './style'

export class DeliveryAddressForm extends React.Component {
  render() {
    return (
      <Style>
        <div className="title">Ingresa el lugar de entrega</div>
        <div>
          <label htmlFor="name">Nombre</label>
          <input name="name" placeholder="A donde te entregamos?" type="text" />
        </div>
        <div>
          <label htmlFor="street">Calle</label>
          <input name="street" placeholder="Calle" type="text" />
        </div>
        <div>
          <label htmlFor="exterior-number">Numero Exterior</label>
          <input name="exterior-number" placeholder="Numero Exterior" type="number" />
        </div>
        <div>
          <label htmlFor="interior-number">Numero Interior</label>
          <input name="interior-number" placeholder="Numero Interior" type="number" />
        </div>
        <div>
          <label htmlFor="neighboorhood">Colonia</label>
          <input name="neighboorhood" placeholder="Colonia" type="text" />
        </div>
        <div>
          <label htmlFor="city">Ciudad</label>
          <input name="city" placeholder="Ciudad" type="text" />
        </div>
        <div>
          <label htmlFor="zip-code">Codigo Postal</label>
          <input name="zip-code" placeholder="Codigo Postal" type="number" />
        </div>
        <div>
          <label htmlFor="state">Estado</label>
          <input name="state" placeholder="Estado" type="text" />
        </div>
        <div className="buttons">
          <button>Verifica tu Pedido</button>
          <button>Añade esta Direccion</button>
        </div>
      </Style>
    )
  }
}
