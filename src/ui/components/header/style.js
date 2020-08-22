import styled from 'styled-components'

export default styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 4em;
  border-bottom: 1px solid grey;
  background: white;
  z-index: 3;

  .search {
    position: fixed;
    left: 50%;
    width: 18em;
    margin-left: -10.2em;
    margin-top: 0.8em;
    & :focus {
      outline: none;
    }
    & input {
      font-size: 18px;
      padding: 0.5em 1em;
      border-radius: 10px;
      width: 100%;
    }
  }

  .hidden {
    display: none;
  }

  .logo_links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .logo {
      margin-left: 5em;
      @media only screen and (max-width: 524px) {
        display: none;
      }
      @media only screen and (max-width: 780px) {
        margin-left: 1em;
      }
    }

    .links {
      margin-top: 1em;
      margin-bottom: 1em;
      margin-right: 5em;

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
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        padding: 0.5em;
      }

      & .account_link {
        border: 1px solid black;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        padding: 0.5em;
      }

      & .active {
        background-color: #003049;
        color: white;
      }

      @media only screen and (max-width: 870px) {
        margin-right: 1em;
      }

      @media only screen and (max-width: 732px) {
        display: none;
      }
    }
  }
`
