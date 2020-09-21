import styled from 'styled-components'

export default styled.div`
  margin-top: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .title {
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .map_container {
    position: relative;
    margin: 0.5em auto;
    height: 20em;
    max-width: 30em;
    width: 90%;

    .map {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      overflow: hidden;
    }
  }
`
