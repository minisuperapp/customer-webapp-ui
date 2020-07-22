import styled from 'styled-components'

export default styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10em auto;
  border: 1px solid black;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  min-width: 20em;

  .header {
    background-color: #6f8f72;
    padding: 0.5em 1em;
    text-align: center;
    color: whitesmoke;
    font-weight: bold;
  }

  .body {
    padding: 1em;

    .field {
      margin-bottom: 1em;
      padding-left: 10px;
    }

    .buttons {
      display: flex;
      justify-content: space-between;

      button {
        padding: 0.2em 1em;
      }

      .ok-button {
        cursor: pointer;
        font-size: 16px;
        background-color: #6f8f72;
        color: whitesmoke;
        font-weight: bold;
      }

      .cancel-button {
        cursor: pointer;
        font-size: 14px;
      }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
`
