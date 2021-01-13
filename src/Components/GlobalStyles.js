import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
  ${reset};
  a {
    text-decoration: none;
    color: inherit;
  }
  input {
    color: inherit;
    font-family: inherit;
  }
  * {
    box-sizing: border-box;
  }
  body {
    margin-left: 300px;         /* Header width */
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
