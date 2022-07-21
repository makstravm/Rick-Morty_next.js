import { GetServerSideProps, NextPage } from "next";

import Layout from "components/Layout";
import Character from "components/Character";
import { IPageCharacterProps } from "types/types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `${process.env.BASE_URL}/character/${context.params?.page}`
  );

  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { character: data },
  };
};

const MainCharacter: NextPage<IPageCharacterProps> = ({ character }) => (
  <Layout title={character.name}>
    <Character character={character} />
  </Layout>
);

export default MainCharacter;
