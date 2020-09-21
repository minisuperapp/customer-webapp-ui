import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5em;
  margin-bottom: 1em;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: SFProText-Bold, serif;
    font-size: 24px;
    margin-bottom: 0.2em;
  }

  .button_container {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 300px;
    margin: 0.5em auto;

    .keep_buying_button {
      font-family: SFProTextRegular, serif;
      font-size: 1.1rem;
      border-radius: 8px;
      cursor: pointer;
      color: #fefefe;
      width: 100%;
      background-color: #003049;
      margin-bottom: 0.5em;
      margin-right: 0.5em;
      padding: 0.3em 0;
    }

    .purchase_button {
      font-family: SFProTextRegular, serif;
      font-size: 1.1rem;
      font-weight: bold;
      cursor: pointer;
      color: #003049;
      border-radius: 8px;
      width: 100%;
      background-color: #fcbf49;
      border: 2px solid #003049;
      margin-bottom: 0.5em;
      padding: 0.3em 0;
    }
  }

  .grand_total {
    margin-bottom: 0.2em;
    font-size: 24px;
  }

  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
    margin-bottom: 4em;
  }
`
