import { GetServerSideProps, NextPage } from "next";
import Layout from "components/Layout";
import CharactersList from "components/CharactersList";
import Pagination from "components/Pagination";
import { ICharacter, IResponse } from "types/types";
import { routesUrls } from "constants/routes";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `${process.env.BASE_URL}/character/?page=${context.params?.page}`
  );

  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: data,
  };
};

const Characters: NextPage<IResponse<ICharacter>> = ({ results, info }) => (
  <Layout title="Characters">
    <CharactersList characters={results} />
    <Pagination info={info} path={routesUrls.CHARACTERS} />
  </Layout>
);

export default Characters;
