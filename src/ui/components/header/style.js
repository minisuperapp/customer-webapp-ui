import styled from 'styled-components'

export default styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid grey;
  background: white;
  z-index: 3;

  .logo {
    margin-left: 5em;
    @media only screen and (max-width: 485px) {
      display: none;
    }
    @media only screen and (max-width: 780px) {
      margin-left: 1em;
    }
  }

  .search {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    margin-top: 1em;
    margin-bottom: 0.5em;
    & :focus {
      outline: none;
    }

    & input {
      font-size: 18px;
      padding: 0.5em 1em;
      border-radius: 15px;
      min-width: 15em;
    }
  }

  & .links {
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

    @media only screen and (max-width: 780px) {
      margin-right: 1em;
    }

    @media only screen and (max-width: 625px) {
      display: none;
    }
  }
`
