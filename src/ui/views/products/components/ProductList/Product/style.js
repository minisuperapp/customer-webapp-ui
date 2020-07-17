import styled from 'styled-components'

export default styled.div`
  border: 1px solid black;
  margin-top: 1em;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 6em;
  width: 20em;
  margin-right: 1em;

  & .image {
    margin-right: 1em;
    height: 80%;
    width: 100%;
    max-width: 100px;
    background: #ffffff no-repeat right;
    background-size: contain;
  }

  & .main_panel {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #ffffff;
    width: 100%;
  }

  & .text_title {
    margin-left: 5px;
    font-family: SFProText-Bold, serif;
    font-size: 24px;
    color: #212121;
  }
  
  & .price {
    margin-left: 0.5em;
    font-family: SFProTextRegular, sans-serif;
    font-size: 18px;
    color: #212121;
    clear: right;
  }

  & button {
    margin-top: 0.5em;
    font-family: SFProTextRegular, serif;
    font-size: 16px;
    border-radius: 18px;
    width: 100%;
    max-width: 100px;
    cursor: pointer;
    box-shadow: 0 2px 8px 0 rgb(73, 162, 91);
    color: white;
    background-color: #49a25b;
  }
`
