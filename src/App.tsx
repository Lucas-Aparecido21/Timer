import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/styles/global";
import { defaultTheme } from "../src/styles/themes/default";
import { Button } from "./components/Button";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="danger" />
      <Button variant="sucess" />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  );
}
