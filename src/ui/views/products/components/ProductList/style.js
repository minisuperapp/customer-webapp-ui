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

  & .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`
