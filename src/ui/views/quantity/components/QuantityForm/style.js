import styled from 'styled-components'

export default styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-family: SFProText-Bold, serif;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image {
    margin-bottom: 1em;
    justify-content: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 100px;
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

  .productName {
    font-family: SFProText-Bold, serif;
    font-size: 20px;
    color: #212121;
    text-align: center;
  }

  .priceText {
    font-family: SFProText-Regular, serif;
    font-size: 12px;
    color: #212121;
    text-align: center;
    margin-bottom: 10px;
  }

  .totalContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .total {
    display: flex;
    margin-right: 1em;
    margin-bottom: 1em;
    font-family: SFProText-Bold, sans-serif;
    font-size: 24px;
    color: #212121;
    text-align: center;
  }

  .quantity {
    display: flex;
    margin-top: 2em;
    margin-bottom: 0.5em;
    font-family: SFProText-Bold, serif;
    font-size: 16px;
    text-align: center;
  }

  .spinners {
    display: flex;
    flex-direction: row;
    margin-bottom: 2em;
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

  .button {
    background-color: #49a25b;
    box-shadow: 0 2px 8px 0 rgb(73, 162, 91);
    font-family: SFProTextRegular, serif;
    font-weight: bold;
    font-size: 18px;
    border-radius: 18px;
    width: 100%;
    color: white;
    cursor: pointer;
    margin-left: 0.5em;
  }

  .backButton {
    border-color: #a24d0d;
    background-color: white;
    box-shadow: 0 2px 8px 0 rgb(162, 77, 13);
    font-family: SFProTextRegular, serif;
    font-size: 18px;
    border-radius: 18px;
    width: 100%;
    color: #a24d0d;
    cursor: pointer;
    margin-right: 0.5em;
  }
`
