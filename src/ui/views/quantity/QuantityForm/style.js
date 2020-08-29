import styled from 'styled-components'

export default styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.5em;
  }

  .image {
    margin-bottom: 0.5em;
    justify-content: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 80px;
    width: 100px;
  }

  .input {
    border-right-color: transparent;
    border-left-color: transparent;
    border-top-color: #003049;
    border-bottom-color: #003049;
    text-align: center;
    font-size: 22px;
    max-width: 100px;
  }

  .product_name {
    font-size: 1.8rem;
    color: #212121;
    text-align: center;
  }

  .price {
    font-family: SFProText-Regular, serif;
    font-size: 1.5rem;
    color: #212121;
    text-align: center;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  .quantity_label {
    display: flex;
    margin-bottom: 0.5em;
    font-size: 1.5rem;
    text-align: center;
  }

  .spinners {
    display: flex;
    flex-direction: row;
    margin-bottom: 1em;
    height: 2em;
  }

  .total_container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .total {
    display: flex;
    margin-right: 1em;
    margin-bottom: 1em;
    font-size: 24px;
    color: #212121;
    text-align: center;
  }

  .addButton {
    background-color: #003049;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: none;
    color: white;
    text-align: center;
    font-size: 24px;
    cursor: pointer;
    width: 2em;
  }

  .subtractButton {
    background-color: #003049;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: none;
    color: white;
    text-align: center;
    font-size: 24px;
    cursor: pointer;
    width: 2em;
  }

  .button_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 0 auto;

    .cancel_button {
      background-color: #fff;
      color: black;
      margin-right: 0.5em;
      font-family: SFProTextRegular, serif;
      font-size: 1.2rem;
      border-radius: 10px;
      width: 6em;
      cursor: pointer;
    }

    .add_cart_button {
      font-family: SFProTextRegular, serif;
      font-size: 1.2rem;
      border-radius: 10px;
      margin-left: 0.2em;
      margin-right: 0.2em;
      width: 10em;
      padding: 0.2em;
      color: #fefefe;
      border: none;
      cursor: pointer;
      background-color: #003049;
    }
  }
`
