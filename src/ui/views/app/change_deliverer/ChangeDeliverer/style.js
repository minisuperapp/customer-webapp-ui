import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;

  .title {
    font-family: SFProText-Bold, serif;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .cancel_button {
    background-color: #fff;
    color: black;
    box-shadow: none;
    margin-right: 0.5em;
    font-family: SFProTextRegular, serif;
    font-weight: 700;
    font-size: 18px;
    border-radius: 10px;
    width: 6em;
    cursor: pointer;
  }
`
