import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.scss";
import { UserContextProvider } from "context/userContext";

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => (
  <SessionProvider session={session}>
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  </SessionProvider>
);

export default MyApp;
