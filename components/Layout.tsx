import Head from "next/head";
import { FC } from "react";
import { ILayoutProps } from "types/types";
import Footer from "./Footer";
import Header from "./Header";

const Layout: FC<ILayoutProps> = ({ children, title }) => (
  <>
    <Head>
      <title>{`${title} | Rick & Morty`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="keywords"
        content={`Rick, Morty, Rick and Morty, movies ${title}`}
      />
    </Head>

    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
