import styled from 'styled-components'

export default styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .title {
    font-family: SFProText-Bold, serif;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  & .map_container {
    position: relative;
    margin: 1em auto;
    height: 20em;
    width: 40em;

    @media screen and (max-width: 55em) {
      width: 20em;
    }
  }

  & .map {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
  }

  & .button_container {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 300px;
  }

  .accept_button {
    font-family: SFProTextRegular, serif;
    font-size: 18px;
    border-radius: 18px;
    width: 100%;
    cursor: pointer;
    background-color: #49a25b;
    box-shadow: 0 2px 8px 0 #49a25b;
    font-weight: 700;
    color: #fff;
    margin-left: 0.5em;
  }

  & .accept_disabled {
    background-color: gray;
    box-shadow: none;
    cursor: default;
  }

  & .cancel_button {
    background-color: #fff;
    color: black;
    box-shadow: none;
    margin-right: 0.5em;
    font-family: SFProTextRegular, serif;
    font-size: 18px;
    border-radius: 18px;
    width: 100%;
    cursor: pointer;
  }
`
