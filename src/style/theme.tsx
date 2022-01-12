import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
  }

  body {
    font-family: 'Lato', 'Helvetica', 'Arial', sans-serif;
    font-size: 14px;
    color: #333;
    margin: 0;
  }

  button {
    font-family : inherit;
    font-size: 1em;
    color: #333;
  }

  * {
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    dark: "#333",
    grey6: "#717175",
    grey5: "#8b8b8f",
    grey4: "#b4b4b8",
    grey3: "#dcdce0",
    grey2: "#eeeef2",
    grey1: "#f7f7f9",

    white: "#fff",

    darkGreen: "#157123",
    green: "#37A4471A",
    lightGreen: "#40c353",

    darkBlue: "#3f475e",
    blue: "#305e95",
    lightBlue: "#5787bf",

    darkOrange: "#c14e04",
    orange: "#e77b35",
    lightOrange: "#eda538",

    darkRed: "#af0419",
    red: "#d33649",
    lighRed: "#f22d45",

    purple: "#835994",

    brown: "#935f3a",
  },
};

const Theme = ({ children }: { children: React.ReactElement }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Theme;
