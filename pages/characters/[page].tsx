import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Layout from "components/Layout";
import CharactersList from "components/CharactersList";
import Pagination from "components/Pagination";
import { ICharacter, IResponse } from "types/types";
import { routesUrls } from "constants/routes";
import { useRouter } from "next/router";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { page: "1" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch(
    `${process.env.BASE_URL}/character/?page=${context.params?.page}`
  );

  const data = await response.json();

  if (!data?.results) {
    return {
      notFound: true,
    };
  }

  return {
    props: data,
  };
};

const Characters: NextPage<IResponse<ICharacter>> = ({ results, info }) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <h1>Loading..................</h1>;
  }

  return (
    <Layout title="Characters">
      <CharactersList characters={results} />
      <Pagination info={info} path={routesUrls.CHARACTERS} />
    </Layout>
  );
};

export default Characters;
