import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const defaultTheme = {
  };
  
const darkTheme = {
  primary: "black",
  text: "white",
};

const GlobalStyle = createGlobalStyle`
body {
    color: ${(props) => (props.theme.text)};
    background-color: ${(props) => (props.theme.primary)};
}
`;

export const GlobalStyles = ({ darkModeEnabled, children }) => {
  return (
    <ThemeProvider theme={darkModeEnabled ? darkTheme : defaultTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
