import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid black;
  margin-bottom: 1em;
  margin-right: 0.5em;
  margin-left: 0.5em;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08);
  height: 10em;
  width: 20em;

  & .image {
    margin-left: 0.5em;
    margin-right: 0.5em;
    height: 80%;
    width: 100%;
    max-width: 100px;
    background: #ffffff no-repeat right;
    background-size: contain;
  }

  & .main_panel {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    background-color: #ffffff;
    width: 100%;
    height: 100%;
  }

  & .product_name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0.5em;
    text-align: left;
    font-family: SFProText-Bold, serif;
    font-size: 1rem;
    color: #212121;
    height: 3em;
    overflow: scroll;
  }

  & .quantity {
    margin-left: 0.5em;
    font-family: SFProTextRegular, sans-serif;
    font-size: 1rem;
    color: #212121;
    clear: right;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    border-bottom-right-radius: 10px;
    height: 2.5em;

    .remove_button {
      margin-top: 0.5em;
      font-family: SFProTextRegular, serif;
      font-size: 16px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      width: 50%;
      cursor: pointer;
      border: none;
      border-top: 2px solid #003049;
      border-left: 2px solid #003049;
      color: black;
      background-color: #fefefe;
    }

    .select_button {
      margin-top: 0.5em;
      font-family: SFProTextRegular, serif;
      font-size: 16px;
      border-top-left-radius: 8px;
      border-bottom-right-radius: 8px;
      width: 50%;
      cursor: pointer;
      color: #fefefe;
      border: none;
      border-top: 2px solid #003049;
      border-left: 2px solid #003049;
      background-color: #003049;
    }
  }
`
