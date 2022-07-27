import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import Layout from "components/Layout";
import Character from "components/Character";

import { IAllInfo, IPageCharacterProps } from "types/types";

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${process.env.BASE_URL}/character`);

  const {
    info: { count },
  }: { info: IAllInfo } = await response.json();

  let paths: { params: { page: string } }[] = [];

  for (let i = 1; i <= count; i++) {
    paths = [...paths, { params: { page: i.toString() } }];
  }

  return {
    paths,
    fallback: "blocking",
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
const CharacterPage: NextPage<IPageCharacterProps> = ({ character }) => (
  <Layout title={character.name}>
    <Character character={character} />
  </Layout>
);

export default CharacterPage;
