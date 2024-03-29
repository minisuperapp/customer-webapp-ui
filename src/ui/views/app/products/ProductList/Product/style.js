import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid black;
  margin-bottom: 0.5em;
  margin-right: 0.25em;
  margin-left: 0.25em;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08);
  height: 9em;
  width: 20em;

  .image_container {
    margin-left: 0.2em;
    margin-right: 0.2em;
    width: 6em;

    .image {
      max-width: 100px;
      max-height: 140px;
    }
  }

  .main_panel {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    background-color: #ffffff;
    width: 100%;
    height: 100%;

    .text_title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 0.2em;
      margin: 0.5em;
      text-align: left;
      font-family: SFProText-Bold, serif;
      font-size: 1.2rem;
      color: #212121;
      height: 3em;
      overflow: hidden;
    }

    .price {
      margin-right: 0.5em;
      font-family: SFProTextRegular, sans-serif;
      font-size: 1.2rem;
      color: #212121;
      align-self: flex-end;
    }

    .buttons {
      display: flex;
      justify-content: flex-end;
      border-bottom-right-radius: 10px;
      height: 2.5em;

      .select_button {
        margin-top: 0.5em;
        font-family: SFProTextRegular, serif;
        font-size: 16px;
        border-top-left-radius: 8px;
        border-bottom-right-radius: 8px;
        width: 50%;
        cursor: pointer;
        color: #fefefe;
        border: none;
        border-top: 2px solid #003049;
        border-left: 2px solid #003049;
        background-color: #003049;
      }
    }
  }
`
