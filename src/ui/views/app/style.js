import styled from 'styled-components'

export default styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #fefefe;
  flex-direction: column;

  .main {
    margin-top: 4em;

    @media only screen and (max-width: 524px) {
      margin-top: 3.1em;
    }
  }
`
