import Head from 'next/head';
import NavBar from './NavBar';

const Header = () => (
  <>
    <Head>
      <title>Rick &amp; Morty | Info</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="keywords"
        content="Rick, Morty, Rick and Morty, movies"
      ></meta>
    </Head>
    <NavBar />
  </>
);

export default Header;
