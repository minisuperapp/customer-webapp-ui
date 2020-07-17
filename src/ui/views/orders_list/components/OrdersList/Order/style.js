import styled from 'styled-components'

export default styled.div`
  border: 1px solid black;
  border-radius: 5px;
  width: 15em;
  padding: 0.5em;
  margin-top: 1em;
  margin-left: 1em;

  & .image {
    text-align: right;
  }

  & .info {
    width: 50%;
  }
  & .header {
    text-align: center;
    border-bottom: 1px solid black;
  }

  & .content {
    display: flex;
    align-items: flex-start;
    padding-top: 0.5em;
  }
`
