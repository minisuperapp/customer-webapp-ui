import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0.5em;
  border: 1px solid black;
  border-radius: 10px;
  padding: 1em;
  height: 10em;

  & .select_button {
    background-color: #003049;
    font-family: SFProTextRegular, serif;
    font-weight: bold;
    font-size: 16px;
    border-radius: 10px;
    width: 100%;
    color: white;
    cursor: pointer;
    margin-left: 0.5em;
  }
  .image {
    margin-bottom: 0.5em;
    justify-content: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 80px;
    width: 100px;
  }
`
