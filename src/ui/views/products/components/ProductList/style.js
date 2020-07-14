import styled from 'styled-components'

export default styled.div`
  .textChooseProduct {
    font-family: SFProText-Bold, serif;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media all and (min-width: 1125px) {
    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-row-gap: 1em;
      grid-column-gap: 4em;
      margin-left: 4em;
      margin-right: 4em;
      grid-auto-rows: minmax(100px, auto);
    }
  }

  @media not all and (min-width: 1125px) {
    .container {
      width: 100%;
      max-width: 350px;
      margin: 0 auto;
    }
  }
`
