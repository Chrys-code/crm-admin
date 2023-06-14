import * as styled from 'styled-components';
// import theme from '../utils/theme';

const GlobalStyles = styled.createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-weight: 400;
    font-style: normal;
    line-height: 1.5em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    border: none;
    border-radius: none;
    background: none;
  }
`;

export default GlobalStyles;
// font-family: ${({ theme }) => theme.font.family.join()};
