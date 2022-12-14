import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import Episode from "components/main/Episode";
import Layout from "components/Layout";

import { gql } from "api";

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

  let paths: { params: { page: string } }[] = [];

  for (let i = 1; i <= info.count; i++) {
    paths = [...paths, { params: { page: i.toString() } }];
  }

  return {
    paths,
    fallback: "blocking",
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
          image
        }
      }
    }`,
    { id: context.params?.page }
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
