import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./themes/default";
import { Home } from "./pages/Home";

export function App () {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
         <GlobalStyle />
            <Home />
      </ThemeProvider>
    </>
  );
} 