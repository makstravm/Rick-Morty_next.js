import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import Episode from "components/Episode";
import Layout from "components/Layout";

import { gql } from "helpers/gql";
import { IEpisodePageProps } from "types/types";

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: {
      episodes: { info },
    },
  } = await gql(
    `query{
      episodes(filter:{episode:""}) {
        info { 
          count 
        }
      }
    }`,
    {}
  );

  let paths: { params: { episode: string } }[] = [];

  for (let i = 1; i <= info.count; i++) {
    paths = [...paths, { params: { episode: i.toString() } }];
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const {
    data: { episode },
  } = await gql(
    `query ($id:ID!){
      episode(id: $id) {
        id
        name
        air_date
        episode
        characters {
          id
          name
        }
      }
    }`,
    { id: context.params?.episode }
  );

  if (!episode) {
    return {
      notFound: true,
    };
  }

  return {
    props: { episodeData: episode },
  };
};

const EpisodePage: NextPage<IEpisodePageProps> = ({ episodeData }) => (
  <Layout title={episodeData.episode}>
    <Episode episodeOne={episodeData} />
  </Layout>
);

export default EpisodePage;
