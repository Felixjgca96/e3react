import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
    --gray-bg: #2b2b2c;
  --btn-gradient: linear-gradient(83deg, white, #fb103d);
  --btn-gradient-secondary: linear-gradient(140deg, #3B3022, #3B2329);
  }
  *{
    list-style: none;
    text-decoration: none;
}
  html{
    scroll-behavior: smooth;
  }

    body {
    margin: 0;
    padding: 0;
    background: #131415;
    font-family: 'Montserrat', sans-serif;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden
    }

    a {
    text-decoration: none;
    }

    a:visited {
    color: white;
    }

    li {
    list-style: none;
    }

`;
