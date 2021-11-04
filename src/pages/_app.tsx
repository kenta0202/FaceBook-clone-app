import "../../styles/dist.css";
import type { AppProps } from "next/app";
// import { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
