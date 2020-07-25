import styled from 'styled-components'

export default styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Roboto, Helvetica, sans-serif;

  .title {
    font-size: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #6f8f72;
    padding: 0.5em 1em;
    text-align: center;
    color: whitesmoke;
    font-weight: bold;
  }

  .body {
    margin-top: 20px;
    border: 1px solid black;
    padding: 15px;
    display: table;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;

    .verify {
      font-size: 16px;
      padding: 10px;
      background-color: #49a25b;
      box-shadow: 0 2px 8px 0 rgb(73, 162, 91);
      border-radius: 18px;
      color: white;
      cursor: pointer;
    }

    .add {
      font-size: 16px;
      background-color: #49a25b;
      box-shadow: 0 2px 8px 0 rgb(73, 162, 91);
      border-radius: 18px;
      color: white;
      cursor: pointer;
      margin-left: 15px;
    }
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
    margin-radius: 2px;
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
`
