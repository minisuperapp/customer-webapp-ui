import styled from 'styled-components'

export default styled.div`

  & .continue_shopping {
    display: flex;
    justify-content: center;
    
    button {
     cursor: pointer;
    }
  }

  & .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1em;
    margin-left: 2em;
  }
`
