import styled from 'styled-components'

export default styled.div`
  margin-top: 1em;
  
  .title {
    font-family: SFProText-Bold, serif;
    font-size: 24px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  & .orders {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`
