import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;

  & .message {
    font-size: 18px;
  }

  & .link {
    margin-top: 1em;

    & a {
      text-decoration: none;
      color: white;
      padding: 0.5em;
      background-color: #49a25b;
      border-radius: 10px;
      border: 1px solid black;
    }
  }
`
