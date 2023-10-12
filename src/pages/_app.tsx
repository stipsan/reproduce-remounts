import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LiveQueryProvider } from "@sanity/preview-kit";
import { client } from "../../sanity/lib/client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LiveQueryProvider client={client}>
      <Component {...pageProps} />
    </LiveQueryProvider>
  );
}
