import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .button_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    max-width: 320px;
    margin-top: 0.5em;

    .accept_button {
      font-family: SFProTextRegular, serif;
      font-size: 1.2rem;
      border-radius: 5px;
      padding: 0.2em 0.5em;
      cursor: pointer;
      background-color: #003049;
      font-weight: 700;
      color: #fff;
      border: none;
      margin-left: 0.5em;
    }

    .disabled_button {
      font-family: SFProTextRegular, serif;
      font-size: 1.2rem;
      border-radius: 5px;
      padding: 0.2em 0.5em;
      cursor: pointer;
      font-weight: 700;
      border: none;
      margin-left: 0.5em;
    }
  }
`
