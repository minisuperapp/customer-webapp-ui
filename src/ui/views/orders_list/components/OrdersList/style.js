import styled from 'styled-components'

export default styled.div`
  margin-top: 1em;
  .title {
    font-family: SFProText-Bold, serif;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 2em;
  }
`
