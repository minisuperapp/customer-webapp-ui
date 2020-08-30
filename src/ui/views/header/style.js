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

  .items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .logo {
      margin-left: 5em;
      margin-bottom: 0.5em;
      @media only screen and (max-width: 524px) {
        display: none;
      }
      @media only screen and (max-width: 780px) {
        margin-left: 1em;
      }
      & img {
        width: 4em;
        height: auto;
      }
    }
    .navigation_menu {
      margin-top: 1em;
      margin-bottom: 1em;
      margin-right: 3em;
      @media only screen and (max-width: 1044px) {
        display: none;
      }
    }
  }
`
