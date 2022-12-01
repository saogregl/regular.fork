import Header from "./header";
import Footer from "./footer";
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"


export default function Layout({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider
        // Provider options are not required but can be useful in situations where
        // you have a short session maxAge time. Shown here with default values.
        session={pageProps.session}
      >
        <Header />
        <main><Component {...pageProps} /></main>
        <Footer />
      </SessionProvider>
    </>
  );
}
