import PageError from "components/PageError";
import Head from "next/head";

const Custom500 = () => (
  <>
    <Head>
      <title>{` 404| Rick & Morty`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <PageError codeError="500" />;
  </>
);

export default Custom500;
