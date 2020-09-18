import styled from 'styled-components'

export default styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .map_container {
    position: relative;
    margin: 0.5em auto;
    height: 20em;
    width: 40em;

    @media screen and (max-width: 55em) {
      width: 20em;
    }
  }

  .map {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
  }

  .location {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 20em;
    margin-left: 2em;
  }
`
