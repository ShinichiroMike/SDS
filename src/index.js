import React from "react";
import ReactDOM from "react-dom";
import App from "./pages";
import { ThemeProvider } from "styled-components";
import { theme } from "./ui/theme";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  rootElement
);
