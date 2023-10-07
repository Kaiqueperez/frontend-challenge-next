import { createGlobalStyle } from "styled-components";
const fontPath = "https://fonts.google.com/";
export const GlobalStyle = createGlobalStyle`
   @font-face {
    font-family: 'Saira';
    src: url('${fontPath}specimen/Saira') format('truetype');
    src: url('${fontPath}specimen/Saira') format('opentype');
       
   }
   @font-face {
    font-family: 'Saira Stencil One';
    src: url('${fontPath}specimen/Saira+Stencil+One') format('opentype');   
    src: url('${fontPath}specimen/Saira+Stencil+One') format('truetype');   
   }

   * {
    font-family: 'Saira' ;
   }
`;
