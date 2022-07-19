import Layout from "@components/Layout";
import { GetServerSideProps, NextPage } from "next";
import CharactersList from "@components/CharactersList";
import { ICharacter, IResponse } from "types/responseTypes";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${context.params?.page}`
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
  <Layout>
    <CharactersList characters={results} />
  </Layout>
);

export default Characters;
