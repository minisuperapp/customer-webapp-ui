import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 30em;
  margin: 1em auto;

  .title {
    font-family: SFProText-Bold, serif;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .address_container {
    margin-top: 0.5em;
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;

    .address {
      margin-top: 0.5em;
      padding-left: 2em;
    }
  }

  .total_container {
    display: flex;
    justify-content: center;
    margin-top: 0.5em;
    flex-direction: row;

    .total {
      display: flex;
      margin-right: 1em;
      font-size: 24px;
      color: #212121;
      text-align: center;
    }
  }

  .text_title {
    margin-top: 0.5em;
    font-family: SFProText-Bold, serif;
    font-size: 16px;
    color: #757575;
    margin-left: 1em;
  }

  .address_selection {
    display: flex;
    .address_list {
      margin-left: 1em;
      width: 50%;
    }

    .add_address_link {
      margin-left: 1em;
    }
  }

  .offers_container {
    margin-top: 0.5em;
    max-height: 14em;
    overflow: scroll;
    margin-left: 1em;
    margin-right: 1em;

    .offer_item {
      margin-bottom: 1em;
    }
  }

  .button_container {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 300px;
    margin: 0.5em auto;

    .accept_button {
      background-color: #003049;
      font-family: SFProTextRegular, serif;
      font-size: 1.2rem;
      font-weight: 500;
      border-radius: 10px;
      border: none;
      width: 100%;
      color: white;
      cursor: pointer;
      margin-left: 0.5em;
    }

    .disabled_button {
      background-color: #b5bbb7;
      box-shadow: 0 2px 8px 0 rgb(162, 156, 162);
      font-family: SFProTextRegular, serif;
      border-radius: 10px;
      font-size: 1.2rem;
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
      font-size: 1.2rem;
      border-radius: 10px;
      width: 100%;
      cursor: pointer;
    }
  }
`
