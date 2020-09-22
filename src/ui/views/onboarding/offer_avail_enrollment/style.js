import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    margin-top: 3em;
    width: 4em;
    height: auto;
  }

  .title {
    margin-top: 1em;
    font-size: 1.5rem;
    text-align: center;
    color: #fefefe;
  }

  .subtitle {
    margin-top: 1em;
    font-size: 1.3rem;
    text-align: center;
    color: #fefefe;
    max-width: 12em;
  }

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .form_fields {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 2em;
      width: 100%;

      .field {
        padding: 0.2em 0.5em;
        width: 100%;
        max-width: 15em;
        margin-bottom: 1em;
        font-size: 1.3rem;
        border-radius: 8px;
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      max-width: 20em;

      .accept_button {
        margin-top: 1em;
        font-size: 1.2rem;
        padding: 0.2em 1em;
        border-radius: 8px;
        margin-left: 0.5em;
        width: 10em;
        background-color: #fcbf49;
        color: #003049;
      }

      .go_back_button {
        margin-top: 1em;
        font-size: 1.2rem;
        padding: 0.2em 1em;
        border-radius: 8px;
        margin-right: 0.5em;
        width: 10em;
        background-color: #fefefe;
        color: #003049;
      }
    }
  }

  .note {
    margin-top: 2.5em;
    font-size: 1.2rem;
    text-align: center;
    color: #fefefe;
  }

  .verify_button {
    margin-top: 1em;
    font-size: 1.2rem;
    padding: 0.2em 1em;
    border-radius: 8px;
    background-color: #fefefe;
    color: #003049;
  }
`
