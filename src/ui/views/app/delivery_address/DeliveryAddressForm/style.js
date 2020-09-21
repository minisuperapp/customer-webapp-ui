import styled from 'styled-components'

export default styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Roboto, Helvetica, sans-serif;

  .title {
    font-family: SFProText-Bold, serif;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .body {
    margin-top: 20px;
    border: 1px solid black;
    border-radius: 4px;
    padding: 15px;
    display: table;
  }

  label {
    padding: 8px;
    font-size: 18px;
    display: table-cell;
  }

  .field {
    padding: 4px;
    border-radius: 5px;
    font-size: 16px;
    display: table-cell;
  }

  .name {
    display: table-row;
  }

  .street {
    display: table-row;
  }

  .exterior-number {
    display: table-row;
  }

  .interior-number {
    display: table-row;
  }

  .neighboorhood {
    display: table-row;
  }

  .city {
    display: table-row;
  }

  .zip-code {
    display: table-row;
  }

  .state {
    display: table-row;
  }

  .button_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;

    .cancel_button {
      background-color: #fefefe;
      color: black;
      margin-top: 1em;
      margin-right: 0.5em;
      font-family: SFProTextRegular, serif;
      font-size: 1.2rem;
      border-radius: 10px;
      width: 6em;
      cursor: pointer;
    }

    .accept_button {
      background-color: #003049;
      margin-top: 1em;
      font-family: SFProTextRegular, serif;
      font-size: 1.2rem;
      padding: 0.2em;
      border-radius: 10px;
      border: none;
      width: 100%;
      color: white;
      cursor: pointer;
      margin-left: 0.5em;
    }
  }
`
