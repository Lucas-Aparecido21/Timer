import React from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body{
    background-color: ${(props) => props.theme.white};
    color:#fff;
    
}


body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}

`;
