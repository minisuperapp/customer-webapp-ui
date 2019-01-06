import React from "react";
import { index } from 'src/ui/views/index'
import {styles} from "./styles";

export class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
 const productImages = {
 ORANGE: `url('https://s3.us-west-1.amazonaws.com/minisuper.images/orange_available.jpg')`,
 RED_APPLE: `url('https://s3.us-west-1.amazonaws.com/minisuper.images/red_apple_available.jpg')`,
 CORN_TORTILLA: `url('https://s3.us-west-1.amazonaws.com/minisuper.images/corn_tortilla_available.jpg')`
}
 styles.image={
   display: "flex",
   justifyContent:"center",
   backgroundImage: productImages[this.props.product.code],
   backgroundSize: 'contain',
   backgroundRepeat: 'no-repeat',
   height: "100px",
  width: "100px"
 }

    return (
        <div style={styles.container}>
        <div style = {styles.image}>
        </div>
        <div style = {styles.mainPanel}>
        <div style = {styles.textTitle}>  {this.props.product.name}</div>
        <div style = {styles.textPanel}>
        <div style = {styles.textBody}>${this.props.lowestPrice}</div>
        <div style = {styles.textBody}>  {this.props.lowestPrice && (
                <button style={styles.button}  onClick={() => this.props.changeView(index.QUANTITY, {
            product: this.props.product,
            lowestPrice: this.props.lowestPrice
          })}>
                  <div style={styles.buttonText}>Comprar</div>
                </button>
          )}
          </div>
          </div>
          </div>
        </div>
    );
  }
}
