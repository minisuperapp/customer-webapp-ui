import styled from 'styled-components'

export default styled.div`
  margin-top: 1em;

  .title {
    font-family: SFProText-Bold, serif;
    font-size: 24px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  & .orders {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .button {
    display: flex;
    justify-content: center;
    margin-top: 1.5em;

    .keep-buying {
      background-color: #49a25b;
      border-radius: 5px;
      color: whitesmoke;
      cursor: pointer;
      font-family: Roboto, 'Open Sans', sans-serif;
      font-size: 16px;
      font-weight: bold;
    }
  }
`
