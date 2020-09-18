import styled from 'styled-components'

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid grey;
  background: white;
  z-index: 3;

  .navigation_menu {
    margin-top: 0.5em;
    margin-bottom: 1em;
    @media only screen and (min-width: 1111px) {
      display: none;
    }
  }
`
