import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/styles/global";
import { defaultTheme } from "../src/styles/themes/default";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { createContext } from "react";
import { CyclesContextProvider } from "./contexts/CyclesContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
