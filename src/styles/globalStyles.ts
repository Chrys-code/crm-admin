import * as styled from 'styled-components';
// import theme from '../utils/theme';

const GlobalStyles = styled.createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    font-style: normal;
    line-height: 1.5em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(p) => p.theme.colors.background.page};
    height: 100%;
    min-height: 100vh;
  }

  body {
    margin: 0px;
  }

  #root {
    width: 100%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  button {
    border: none;
    border-radius: none;
    background: none;
  }

  .ReactModalPortal {
    position: absolute;
    z-index: 100;
  }

  .ReactModal__Overlay {
    background: transparent;
    background-color: none;
  }

  .ReactModal__Content {
    width: 400px;
    min-height: 250px;
  }
`;

export default GlobalStyles;
// font-family: ${({ theme }) => theme.font.family.join()};
