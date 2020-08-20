import styled from 'styled-components'

export default styled.div`
  position: absolute;
  top: 20%;
  left: 50%;

  .alert-box {
    font-weight: bold;
    color: #555;
    border-radius: 10px;
    text-transform: uppercase;
    text-align: center;
    background: #e9ffd9 no-repeat 10px 50%;
    border: 1px solid #a6ca8a;
    position: absolute;
    font-family: Tahoma, Geneva, Arial, sans-serif;
    font-size: 16px;
    padding: 10px 10px 10px 36px;
    margin: 10px;
    width: 300px;
    transform: translate(-53%, -50%);

    .close {
      position: absolute;
      top: 10%;
      left: 90%;
    }
  }
`
