import Head from "next/head";
import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface ILayout {
  children: ReactNode;
  title: string;
}

const Layout: FC<ILayout> = ({ children, title }) => (
  <>
    <Head>
      <title>{title} | Rick &amp; Morty</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="keywords" content="Rick, Morty, Rick and Morty, movies" />
    </Head>

    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
