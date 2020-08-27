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
    @media only screen and (min-width: 871px) {
      display: none;
    }
  }
`
