import type { AppProps } from "next/app";
import "../src/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  // Diğer yapılandırmalar

  return <Component {...pageProps} />;
}

export default MyApp;
