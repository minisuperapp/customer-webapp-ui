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
    border-top-color: #49a25b;
    border-bottom-color: #49a25b;
    text-align: center;
    font-size: 22px;
    max-width: 100px;
    height: 50%;
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
  }

  .totalContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
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
    background-color: #49a25b;
    border-bottom-right-radius: 18px;
    border-top-right-radius: 18px;
    box-shadow: 0 2px 8px 0 rgb(73, 162, 91);
    border: none;
    color: white;
    text-align: center;
    margin-bottom: 1em;
    font-size: 24px;
    cursor: pointer;
    height: 1.4em;
  }

  .subtractButton {
    background-color: #49a25b;
    border-bottom-left-radius: 18px;
    border-top-left-radius: 18px;
    box-shadow: 0 2px 8px 0 rgb(73, 162, 91);
    border: none;
    color: white;
    text-align: center;
    margin-bottom: 1em;
    font-size: 24px;
    cursor: pointer;
  }

  .buttonContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 300px;
  }

  .accept_button {
    background-color: #49a25b;
    box-shadow: 0 2px 8px 0 rgb(73, 162, 91);
    padding: 0.5em;
    font-family: SFProTextRegular, serif;
    font-size: 1.7rem;
    font-weight: 500;
    border-radius: 10px;
    width: 100%;
    color: white;
    cursor: pointer;
    margin-left: 0.5em;
  }

  .cancel_button {
    background-color: #fff;
    color: black;
    box-shadow: none;
    margin-right: 0.5em;
    font-family: SFProTextRegular, serif;
    font-size: 1.5rem;
    border-radius: 10px;
    width: 100%;
    cursor: pointer;
  }
`
