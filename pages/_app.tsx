import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.scss";
import { UserContextProvider } from "context/userContext";
import ThemeContextWrapper from "context/ThemeContext";

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => (
  <SessionProvider session={session}>
    <ThemeContextWrapper>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </ThemeContextWrapper>
  </SessionProvider>
);

export default MyApp;
