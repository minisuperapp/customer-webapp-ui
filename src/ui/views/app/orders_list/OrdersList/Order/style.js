import styled from 'styled-components'

export default styled.div`
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 1em;
  margin-right: 0.5em;
  margin-left: 0.5em;
  width: 15em;
  padding: 1em 1em 0.5em 0.5em;

  .header {
    text-align: center;
    border-bottom: 1px solid black;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 0.5em;
    width: 100%;

    .order_products {
      display: flex;
      flex-direction: column;
      font-size: 1rem;
      text-align: left;
      max-height: 15em;
      overflow: scroll;
      padding: 0.2em;
      border: 1px solid black;
      margin-bottom: 0.5em;
      margin-right: 0.5em;
      width: 100%;
    }
  }
`
