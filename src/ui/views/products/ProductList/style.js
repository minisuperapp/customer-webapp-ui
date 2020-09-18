import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5em;
  margin-bottom: 1em;

  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
    margin-bottom: 4em;
  }

  .complete_purchase_button {
    font-family: SFProTextRegular, serif;
    margin-bottom: 0.5em;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
    color: #003049;
    background-color: #fcbf49;
    padding: 0.3em;
    border: 2px solid #003049;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .hidden {
    display: none;
  }
`
