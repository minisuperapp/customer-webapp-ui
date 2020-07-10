import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  margin: 1em auto .delivererContainer {
    display: flex;
    flex-direction: column;
  }

  .delivererName {
    font-family: SFProText-Regular, serif;
    font-size: 16px;
    color: black;
    text-align: center;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  .trackDelivererButton {
    border-color: #49a25b;
    background-color: white;
    box-shadow: 0 2px 8px 0 rgb(73, 162, 91);
    font-family: SFProTextRegular, serif;
    font-size: 18px;
    border-radius: 18px;
    width: 100%;
    max-width: 200px;
    color: #49a25b;
    cursor: pointer;
    margin: 0 auto;
  }

  .offerContainer {
    display: flex;
    flex-direction: column;
    margin-top: 2em;
  }

  .productContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .image {
    flex: 1;
    margin: 1em auto auto 1em;
    justify-content: center;
    align-items: right;
    background-size: contain;
    background-repeat: no-repeat;
    height: 100px;
    width: 100px;
  }

  .productDetailsContainer {
    flex: 1;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: left;
  }

  .productName {
    font-family: SFProText-Regular, serif;
    font-size: 18px;
    font-weight: bold;
    color: #212121;
  }

  .productPrice {
    font-family: SFProText-Regular, serif;
    font-size: 16px;
    color: #212121;
  }

  .totalContainer {
    display: flex;
    flex-direction: row;
    margin: 1em auto;
  }

  .textTitle {
    alignment: left;
    font-family: SFProText-Bold, serif;
    font-size: 16px;
    color: #757575;
    margin-left: 1em;
  }
`
