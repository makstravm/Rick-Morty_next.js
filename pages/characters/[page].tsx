import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "components/Layout";
import CharactersList from "components/main/CharactersList";
import Pagination from "components/Pagination";
import { routesUrls } from "constants/routes";
import { ICharactersProps } from "types/types";
import Preloader from "components/Preloader";
import { gql } from "helpers/gql";

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: {
      characters: {
        info: { pages },
      },
    },
  } = await gql(
    `query {
      characters {
        info {
          pages
        }
      }
    }`,
    {}
  );

  let paths: { params: { page: string } }[] = [];

  for (let i = 1; i <= pages; i++) {
    paths = [...paths, { params: { page: i.toString() } }];
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await gql(
    `query($page: Int) {
      characters(page: $page) {
        info {
          pages
          next
          prev
        }
        results {
          id
          name
          image
        }
      }
    }`,
    { page: Number(context.params?.page) }
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: data.characters,
  };
};

const Characters: NextPage<ICharactersProps> = ({ results, info }) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <Preloader />;
  }

  return (
    <Layout title="Characters">
      <CharactersList characters={results} />
      <Pagination info={info} path={routesUrls.CHARACTERS} />
    </Layout>
  );
};

export default Characters;
