import { ThemeProvider } from "theme-ui";
import theme from "@hackclub/theme";
import "@hackclub/theme/fonts/reg-bold.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
