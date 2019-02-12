import React from "react";
import {index} from 'src/ui/views/index'
import { views } from 'src/ui/views/index'
import { styles } from './styles'

export class AssignedOffer extends React.Component {
  render() {
    const productImages = {
      ORANGE: `url('https://s3.us-west-1.amazonaws.com/minisuper.images/orange_available.jpg')`,
      RED_APPLE: `url('https://s3.us-west-1.amazonaws.com/minisuper.images/red_apple_available.jpg')`,
      CORN_TORTILLA: `url('https://s3.us-west-1.amazonaws.com/minisuper.images/corn_tortilla_available.jpg')`,
    }
    styles.image = {
      display: 'flex',
      marginTop: '40px',
      justifyContent: 'center',
      alignItem: 'center',
      backgroundImage: productImages[this.props.params.product.code],
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      height: '100px',
      width: '100px',
    }
	
    return (
      <div style={styles.container}>
	    <div style={styles.textTitle}>Revise su orden</div>
        <div style={styles.image}></div>
        <div style={styles.space}>
          <div style={styles.normalText}>Producto: </div>
          <div style={styles.priceText}>{this.props.params.product.name}</div>
        </div>
        <div style={styles.space}>
          <div style={styles.normalText}>Cantidad: </div>
          <div style={styles.priceText}>{this.props.params.quantity}</div>
        </div>
        <div style={styles.space}>
          <div style={styles.normalText}>Precio: </div>
          <div style={styles.priceText}>${this.props.offer.unitPrice}</div>
        </div>
        <div style={styles.space}>
          <div style={styles.normalText}>Total: </div>
          <div style={styles.priceText}>${this.props.total}</div>
        </div>
        <div style={styles.space}>
          <div style={styles.normalText}>Proveedor: </div>
          <div style={styles.priceText}>{this.props.offer.deliverer.name}</div>
        </div>
        <button style={styles.button} onClick={this.props.changeDeliverer}>Cambiar proveedor</button>
        <p></p>
        <button style={styles.button} onClick={this.props.order}>Pedir</button>
        <button style={styles.backButton} onClick={this.props.onCancel}>Volver</button>
      </div>
    );
  }
}
