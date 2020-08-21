import styled from 'styled-components'

export default styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  margin-top: 1em;
  margin-right: 0.5em;
  margin-left: 0.5em;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  height: 10em;
  width: 20em;

  & .subtitle {
    margin-bottom: 0.5em;
  }

  & .description {
    padding: 0.5em;
    width: 15em;
    font-family: SFProTextRegular, serif;
    font-size: 16px;
    resize: none;
  }

  & button {
    margin-top: 1em;
    font-family: SFProTextRegular, serif;
    font-size: 16px;
    border-radius: 10px;
    width: 100%;
    max-width: 100px;
    cursor: pointer;
    box-shadow: 0 2px 8px 0 rgb(73, 162, 91);
    color: white;
    background-color: #49a25b;
  }
`
