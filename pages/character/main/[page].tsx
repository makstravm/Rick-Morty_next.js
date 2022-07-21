import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import Layout from "components/Layout";
import Character from "components/Character";

import { ICharacter, IPageCharacterProps } from "types/types";

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${process.env.BASE_URL}/character/1,2,3,4,5`);

  const data: ICharacter[] = await response.json();

  const paths = data.map(({ id }) => ({
    params: { page: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
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
