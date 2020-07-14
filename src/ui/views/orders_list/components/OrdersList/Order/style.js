import styled from 'styled-components'

export default styled.div`
  border: 1px solid black;
  border-radius: 5px;
  width: 15em;
  padding: 0.5em;
  margin-top: 1em;
  margin-left: 1em;

  & .header {
    text-align: center;
    border-bottom: 1px solid black;
  }
  
  & .content {
    padding-top: 0.5em;
  }
`
