import styled from 'styled-components'

export default styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  @media only screen and (max-width: 1044px) {
    flex-direction: column-reverse;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .menu {
    @media only screen and (max-width: 1044px) {
      margin-top: 0.5em;
    }

    .products_link {
      border: 1px solid black;
      border-right: none;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      padding: 0.5em;
    }

    .cart_link {
      border: 1px solid black;
      padding: 0.5em;
    }

    .orders_link {
      border: 1px solid black;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      border-left: none;
      padding: 0.5em;
    }

    .active {
      background-color: #003049;
      color: white;
    }
  }

  .complete_purchase_link {
    font-family: SFProTextRegular, serif;
    font-size: 16px;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
    color: #003049;
    background-color: #fcbf49;
    padding: 0.3em;
    border: 2px solid #003049;
    margin-left: 1em;

    @media only screen and (max-width: 1044px) {
      margin-bottom: 0.5em;
    }
  }

  .hidden {
    display: none;
  }
`
