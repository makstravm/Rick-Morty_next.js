import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import Layout from "components/Layout";
import Character from "components/Character";

import { IAllInfo, IPageCharacterProps } from "types/types";
import { qgl } from "helpers/gql";

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
  const { data } = await qgl(
    `query($id: ID!) {
      character(id: $id) {
        id
        image
        name
        status
        species
        gender
        created
        origin {
          id
          name
        }
        location {
          id
          name
        }
        episode { id name episode}
      }
    }
  `,
    { id: context.params?.page }
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { character: data.character },
  };
};

const CharacterPage: NextPage<IPageCharacterProps> = ({ character }) => (
  <Layout title={character.name}>
    <Character character={character} />
  </Layout>
);

export default CharacterPage;
