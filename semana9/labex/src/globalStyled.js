import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
  }
  body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  }
  
  h1, h2, h3, h4, h5, h6{
    font-family:'Space Grotesk', sans-serif;
  }  
`;
