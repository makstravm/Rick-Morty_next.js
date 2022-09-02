import PageError from "components/PageError";
import Head from "next/head";

const Custom404 = () => (
  <>
    <Head>
      <title>{` 404| Rick & Morty`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <PageError codeError="404" />;
  </>
);

export default Custom404;
