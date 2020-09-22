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

  .ups {
    margin-top: 1em;
    font-size: 1.5rem;
    color: #fefefe;
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
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 20em;

    .subscribe_button {
      margin-top: 1em;
      font-size: 1.2rem;
      padding: 0.2em 1em;
      border-radius: 8px;
      background-color: #fcbf49;
      color: #003049;
    }

    .go_to_products_button {
      margin-top: 1em;
      font-size: 1.2rem;
      padding: 0.2em 1em;
      border-radius: 8px;
      width: 10em;
      background-color: #fefefe;
      color: #003049;
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
