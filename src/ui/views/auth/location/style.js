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

  .welcome {
    margin-top: 1em;
    font-size: 1.3rem;
    color: #fefefe;
  }

  .title {
    margin-top: 2em;
    font-size: 1.3rem;
    text-align: center;
    color: #fefefe;
  }

  .state {
    margin-top: 1em;
    font-size: 1.5rem;
    padding: 0.2em;
    width: 10em;
    border-radius: 8px;
  }

  .city {
    margin-top: 1em;
    font-size: 1.5rem;
    padding: 0.2em;
    width: 10em;
    border-radius: 8px;
  }

  .area {
    margin-top: 1.1em;
    font-size: 1.2rem;
    padding: 0.2em;
    width: 12.5em;
    border-radius: 8px;
  }

  .area_name {
    color: #fefefe;
  }

  .accept_button {
    margin-top: 1em;
    font-size: 1.5rem;
    padding: 0.2em 1em;
    border-radius: 8px;
    background-color: #fcbf49;
    color: #003049;
  }

  .disabled_button {
    margin-top: 1em;
    font-size: 1.5rem;
    padding: 0.2em 1em;
    border-radius: 8px;
    background-color: #b5bbb7;
    color: #fefefe;
  }
`
