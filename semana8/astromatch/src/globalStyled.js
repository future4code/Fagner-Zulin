import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@400;500&family=Love+Ya+Like+A+Sister&display=swap');   
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
  }
  body {
    font-family: "Kiwi Maru", serif;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  body html #root {
    height: 100%;
  }
`;

export default Global;
