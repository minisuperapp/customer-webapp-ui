import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
  margin-bottom: 1em;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: SFProText-Bold, serif;
    font-size: 24px;
    margin-bottom: 0.2em;
  }

  .purchase_button {
    font-family: SFProTextRegular, serif;
    font-size: 16px;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
    color: #003049;
    background-color: #fcbf49;
    padding: 0.5em;
    border: 2px solid #003049;
    margin-bottom: 0.5em;
  }

  .grand_total {
    margin-bottom: 0.5em;
    font-weight: bold;
  }

  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
    margin-bottom: 4em;
  }
`
