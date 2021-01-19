import { createGlobalStyle } from 'styled-components';
// import reset from 'styled-reset';
import { normalize } from 'styled-normalize';

const globalStyles = createGlobalStyle`
  ${normalize};
  a {
    text-decoration: none;
    color: inherit;
  }
  input {
    color: inherit;
    font-family: inherit;
    border: none;
    background-color: transparent;
    color: #666699;
    font-size: 0.8rem;

    &:focus {
      outline: none;
    }
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 300;
    color: #333333;
    overscroll-behavior: none; /* Remove scroll bounce in all the pages */
  }
  #root { 
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default globalStyles;
