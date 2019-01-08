import React from "react";
import { views } from 'src/ui/views/index'
import {styles} from "./styles";

export class QuantityView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: props.params.product.minimumBuyingQuantity,
      total: Number(props.params.product.minimumBuyingQuantity * props.params.lowestPrice)
    }
  }

  handleChange = (event) => {
    this.setState({
      quantity: event.target.value,
      total: Number(event.target.value) * Number(this.props.params.lowestPrice)
    });
  }

  changeView = () => {
    this.props.changeView(views.ASSIGNED_OFFER, {
      product: this.props.params.product,
      quantity: this.state.quantity
    })

  }
  addQuantity = (event) => {
    this.setState({
      quantity: Number(this.state.quantity) + Number(1),
      total: (Number(this.state.quantity) + Number(1)) * Number(this.props.params.lowestPrice)
    })
  }
  substractQuantity = (event) => {
    this.setState({
      quantity: Number(this.state.quantity) - Number(1),
      total: (Number(this.state.quantity) - Number(1)) * Number(this.props.params.lowestPrice)
    })
  }




  render() {
    const productImages = {
    ORANGE: `url('https://s3.us-west-1.amazonaws.com/minisuper.images/orange_available.jpg')`,
    RED_APPLE: `url('https://s3.us-west-1.amazonaws.com/minisuper.images/red_apple_available.jpg')`,
    CORN_TORTILLA: `url('https://s3.us-west-1.amazonaws.com/minisuper.images/corn_tortilla_available.jpg')`
    }
    styles.image={
     display: "flex",
     marginTop:"50px",
     justifyContent:"center",
     backgroundImage: productImages[this.props.params.product.code],
     backgroundSize: 'contain',
     backgroundRepeat: 'no-repeat',
     height: "100px",
    width: "100px"
    }

    return <div style={styles.container} >
    <div style = {styles.image}> </div>
    <div style = {styles.textTitle}>{this.props.params.product.name}</div>
    <div style = {styles.priceText}> ${this.props.params.lowestPrice} {this.props.params.product.quantityType}</div>
    <div style = {styles.cant}>Cant.</div>
    <div style ={styles.spinners}>
    <button style={styles.substractButton} onClick = {this.substractQuantity}>-</button>
    <input  style={styles.input} type="Text" value={this.state.quantity} onChange={this.handleChange}/>
    <button  style = {styles.addButton} onClick = {this.addQuantity}>+</button>

    </div>
    <div style = {styles.totalContainer} >
       <div style = {styles.total}>Total</div>
       <div  style = {styles.quantity}>${this.state.total}</div>
    </div>
      <button style = {styles.button} onClick={this.changeView}>Buscar repartidor</button>
    </div>
  }

}
