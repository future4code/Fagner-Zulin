import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
   
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }
  body {
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    background-color: #88a825;
  }
  body html #root {
    height: 100%;
  }
`;

export default Global;
