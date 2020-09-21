import styled from 'styled-components'

export default styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 0 20px 20px 20px;
  font-family: Arial, Helvetica, sans-serif;

  & .title {
    font-family: SFProText-Bold, serif;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .body {
    display: table;
    margin-top: 1em;
    padding: 1em;
    border: 1px solid black;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    .name {
      display: table-row;
    }

    .email {
      display: table-row;
    }

    .password {
      display: table-row;
    }

    label {
      display: table-cell;
      padding-top: 20px;
      padding-right: 10px;
    }

    input {
      display: table-cell;
      width: auto;
      padding: 5px;
    }
    
    & .buttons {
      display: flex;
      justify-content: flex-end;
      padding-top: 20px;

      .ok {
        cursor: pointer;
        font-size: 16px;
        background-color: #6f8f72;
        color: whitesmoke;
        font-weight: bold;
        padding: 10px;
      }

      .cancel {
        cursor: pointer;
        font-size: 14px;
      }
    }
  }
`
