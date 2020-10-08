import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-size: 60%;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    @media(max-width: 800px) {
      font-size: 50%;
    }
  }

  body {
    font-family: 'Raleway', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: var(--primary-color);
  }

  h1 {
    font-size: 3.7rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  p, span, a {
    font-weight: 500;
    font-size: 1.4rem;
  }

  strong, button {
    font-size: 1.4rem;
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
