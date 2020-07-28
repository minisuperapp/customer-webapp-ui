import styled from 'styled-components'

export default styled.div`
  margin-top: 1em;
  margin-bottom: 1em;

  .search {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1em;
    margin-bottom: 0.5em;
    & :focus {
      outline: none;
    }

    & input {
      font-size: 18px;
      padding: 0.5em 1em;
      border-radius: 15px;
      min-width: 15em;
    }
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: SFProText-Bold, serif;
    font-size: 24px;
  }

  & .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`
