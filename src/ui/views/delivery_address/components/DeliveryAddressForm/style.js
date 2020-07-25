import styled from 'styled-components'

export default styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Roboto, Helvetica, sans-serif;

  .title {
    font-size: 24px;
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
    font-size: 18px;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;

    .verify {
      font-size: 16px;
      padding: 10px;
    }

    .add {
      font-size: 16px;
    }
  }
`
