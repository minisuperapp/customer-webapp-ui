import styled from 'styled-components'

export default styled.div`
  & a {
    text-decoration: none;
    color: black;
  }

  & .products_link {
    border: 1px solid black;
    border-right: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 0.5em;
  }

  & .orders_link {
    border: 1px solid black;
    border-right: none;
    padding: 0.5em;
  }

  & .cart_link {
    border: 1px solid black;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 0.5em;
  }

  .filled_cart {
    background-color: #fefefe;
    color: #003049;
    font-weight: bold;
    text-decoration: underline;
  }

  & .active {
    background-color: #003049;
    color: white;
  }
`