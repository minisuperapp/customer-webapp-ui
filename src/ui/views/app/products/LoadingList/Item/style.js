import styled from 'styled-components'

export default styled.div`
  .container {
    margin-top: 14px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 6em;

    -webkit-animation: fadein 2s infinite; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 2s infinite; /* Firefox < 16 */
    -ms-animation: fadein 2s infinite; /* Internet Explorer */
    -o-animation: fadein 2s infinite; /* Opera < 12.1 */
    animation: fadein 2s infinite;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
