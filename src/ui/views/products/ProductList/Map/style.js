import styled from 'styled-components'

export default styled.div`
  .map {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    border-radius: 10px;
  }

  .marker {
    display: block;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    padding: 0;
  }

  .change_location {
    position: relative;
    top: 10em;
    left: 8em;
    border-radius: 10px;
    cursor: pointer;
  }
`
