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
    font-weight: bold;
    display: table-cell;
  }

  input {
    padding: 4px;
    font-size: 16px;
    display: table-cell;
    border-radius: 2px;
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

  .accept_button {
    background-color: #003049;
    margin-top: 1em;
    box-shadow: 0 2px 8px 0 rgb(73, 162, 91);
    font-family: SFProTextRegular, serif;
    font-weight: bold;
    font-size: 18px;
    border-radius: 10px;
    width: 100%;
    color: white;
    cursor: pointer;
    margin-left: 0.5em;
  }
`
