import React from 'react'

class Provider extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { deliverer, unitPrice } = this.props.offer
        return (
            <div className="provider">
                <div className="provider-name">
                    <h1>{deliverer.name}</h1>
                </div>
                <div className="provider-offer-price">
                    <h2>$ {unitPrice}</h2>
                </div>
                <div className="provider-select">
                    <button>Seleccionar</button>
                </div>
            </div>
        )
    }
}

export default Provider