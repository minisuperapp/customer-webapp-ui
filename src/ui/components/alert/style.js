import styled from 'styled-components'

export default styled.div`
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 10em auto;
  background: #4e9d11;
  border: 2px solid black;
  padding: 0.5em;
  color: #fefefe;
  font-weight: bold;
  border-radius: 10px;
  text-transform: uppercase;
  font-family: Tahoma, Geneva, Arial, sans-serif;
  font-size: 16px;
  text-align: center;
  width: 18em;
  z-index: 3;

  .message {
    background: inherit;
  }

  .close {
    margin-top: 0.5em;
    color: #fefefe;
    border-radius: 5px;
    cursor: pointer;
    background-color: #003049;
    padding: 0.2em 1em;
  }
`
