import React from 'react'
import { views } from 'src/ui/views/index'
import { styles } from './styles'
import Label from '../../../../components/Label'

export class Quantity extends React.Component {
  render() {
    const productImages = {
      ORANGE: `url('https://s3.us-west-1.amazonaws.com/minisuper.images/orange_available.jpg')`,
      RED_APPLE: `url('https://s3.us-west-1.amazonaws.com/minisuper.images/red_apple_available.jpg')`,
      CORN_TORTILLA: `url('https://s3.us-west-1.amazonaws.com/minisuper.images/corn_tortilla_available.jpg')`,
    }
    styles.image = {
      display: 'flex',
      marginTop: '50px',
      justifyContent: 'center',
      backgroundImage: productImages[this.props.params.product.code],
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      height: '100px',
      width: '100px',
    }

    return (
      <div style={styles.container}>
        <div style={styles.image}> </div>
        <div style={styles.textTitle}>{this.props.params.product.name}</div>
        <div style={styles.priceText}>
          {' '}
          <Label value="Precio: $" />
          <Label value={this.props.params.lowestPrice} />
          <Label value="  Unidad: " />
          <Label value={this.props.params.product.quantityType} />
        </div>
        <div style={styles.cant}>Cant.</div>
        <div style={styles.spinners}>
          <button style={styles.subtractButton} onClick={this.props.subtractQuantity}>
            -
          </button>
          <input
            style={styles.input}
            type="Text"
            value={this.props.quantity}
            onChange={this.handleChange}
          />
          <button style={styles.addButton} onClick={this.props.addQuantity}>
            +
          </button>
        </div>
        <div style={styles.totalContainer}>
          <div style={styles.total}>Total</div>
          <div style={styles.quantity}>${this.props.total}</div>
        </div>
        <button style={styles.button} onClick={this.props.goToAssignedOffer}>
          Buscar proveedor
        </button>
        <button style={styles.backButton} onClick={this.props.goToProducts}>
          Volver a productos
        </button>
      </div>
    )
  }
}
