import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Raleway', sans-serif;
    font-size: 14;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: var(--primary-color);
  }

  h1 {
    font-size: 36;
  }

  h2 {
    font-size: 26;
  }

  p, span {
    font-weight: 500;
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }

  :root {
    --primary-color: #2B2B2B;
    --secundary-color: #FF6581;
    --text-color: #8E8E8E;
  }
`
