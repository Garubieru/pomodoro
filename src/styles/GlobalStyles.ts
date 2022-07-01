import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    min-height: 100vh;
  }

  body {
    background: ${colors.backgroundDark};
    color: ${colors.white};
  }

  html, body, input, button {
    font: 500 1.6rem 'Nunito', sans-serif;
    outline: none;
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }
`;
