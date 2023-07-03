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

  // div:not(#root, [class*='ace_']) {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  // }

  // #code_editor_preview > div {
  //   display: block !important;
  //   flex-direction: unset;
  //   align-items: unset;
  //   justify-content: unset;
  // }

  button {
    border: none;
    border-radius: none;
    background: none;
  }
`;

export default GlobalStyles;
// font-family: ${({ theme }) => theme.font.family.join()};
