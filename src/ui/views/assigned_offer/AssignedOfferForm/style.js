import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  margin: 1em auto;

  .title {
    font-family: SFProText-Bold, serif;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .address_container {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
  }

  & .deliverer_container {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
  }

  & .delivererName {
    font-family: SFProText-Regular, serif;
    font-size: 1.2rem;
    color: black;
    text-align: center;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  & .changeDelivererButton {
    border-color: black;
    background-color: #003049;
    font-family: SFProTextRegular, serif;
    font-size: 18px;
    border-radius: 10px;
    width: 100%;
    max-width: 200px;
    color: white;
    cursor: pointer;
    margin: 0 auto;
  }

  & .offer_container {
    display: flex;
    flex-direction: column;
    margin-top: 2em;
  }

  & .productContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  & .image {
    flex: 1;
    margin: 1em auto auto 1em;
    justify-content: center;
    align-items: flex-end;
    background-size: contain;
    background-repeat: no-repeat;
    height: 100px;
    width: 100px;
  }

  & .productDetailsContainer {
    flex: 1;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: flex-start;
  }

  & .productName {
    font-family: SFProText-Regular, serif;
    font-size: 18px;
    font-weight: bold;
    color: #212121;
  }

  & .productPrice {
    font-family: SFProText-Regular, serif;
    font-size: 16px;
    color: #212121;
  }

  & .total_container {
    display: flex;
    flex-direction: row;
    margin: 1em auto;
  }

  & .text_title {
    font-family: SFProText-Bold, serif;
    font-size: 16px;
    color: #757575;
    margin-left: 1em;
  }

  & .button_container {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 300px;
    margin: 1em auto;
  }

  .accept_button {
    background-color: #003049;
    font-family: SFProTextRegular, serif;
    font-size: 1.7rem;
    font-weight: 500;
    border-radius: 10px;
    width: 100%;
    color: white;
    cursor: pointer;
    margin-left: 0.5em;
  }

  & .disabledButton {
    background-color: #b5bbb7;
    box-shadow: 0 2px 8px 0 rgb(162, 156, 162);
    font-family: SFProTextRegular, serif;
    font-size: 18px;
    border-radius: 10px;
    width: 100%;
    color: white;
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
