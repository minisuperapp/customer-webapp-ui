import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 30em;
  margin: 0.5em auto;

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
    max-width: 20em;
    margin: 0.5em auto;

    .accept_button {
      font-family: SFProTextRegular, serif;
      font-size: 1.4rem;
      font-weight: bold;
      cursor: pointer;
      color: #003049;
      border-radius: 8px;
      width: 100%;
      background-color: #fcbf49;
      border: 2px solid #003049;
      margin-bottom: 0.5em;
    }

    .disabled_button {
      background-color: #b5bbb7;
      color: #fefefe;
      font-family: SFProTextRegular, serif;
      font-size: 1.2rem;
      font-weight: bold;
      border-radius: 8px;
      cursor: pointer;
      width: 100%;
      border: 2px solid #003049;
      margin-bottom: 0.5em;
    }

    .cancel_button {
      font-family: SFProTextRegular, serif;
      font-size: 1.2rem;
      border-radius: 8px;
      cursor: pointer;
      color: black;
      width: 100%;
      background-color: #fefefe;
      border: 2px solid #003049;
      margin-bottom: 0.5em;
      margin-right: 0.5em;
    }
  }
`
