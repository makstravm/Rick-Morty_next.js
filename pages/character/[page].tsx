import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import Layout from "components/Layout";
import Character from "components/main/Character";

import { gql } from "api";

import { IPageCharacterProps } from "types/types";

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: {
      characters: {
        info: { count },
      },
    },
  } = await gql(
    `query {
      characters {
        info {
          count
        }
      }
    }`,
    {}
  );

  let paths: { params: { page: string } }[] = [];

  for (let i = 1; i <= count; i++) {
    paths = [...paths, { params: { page: i.toString() } }];
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const {
    data: { character },
  } = await gql(
    `query($id: ID!) {
      character(id: $id) {
        id
        image
        name
        status
        species
        gender
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

  if (!character) {
    return {
      notFound: true,
    };
  }

  return {
    props: { character: character },
  };
};

const CharacterPage: NextPage<IPageCharacterProps> = ({ character }) => (
  <Layout title={character.name}>
    <Character character={character} />
  </Layout>
);

export default CharacterPage;
