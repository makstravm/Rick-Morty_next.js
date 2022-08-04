import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import Layout from "components/Layout";

import { IEpisodesOfSeasonsProps, IResponseSeasonsData } from "types/types";
import EpisodeList from "components/EpisodeList";
import { gql } from "helpers/gql";

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${process.env.API_URL}/seasons`);

  const data: IResponseSeasonsData[] = await response.json();

  const paths = data.map(({ season }) => ({
    params: { season: season.toUpperCase() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const {
    data: {
      episodes: { results },
    },
  } = await gql(
    `query ($filter:FilterEpisode ) {
      episodes(filter:$filter) {
        results {
          id
          name 
          air_date
          characters {
            id
          } 
          episode
        }
      }
    }`,
    { filter: { episode: context.params?.season } }
  );

  if (!results) {
    return {
      notFound: true,
    };
  }

  return {
    props: { season: results },
  };
};

const EpisodesOfSeason: NextPage<IEpisodesOfSeasonsProps> = ({ season }) => (
  <Layout title={`Season ${season?.[0].episode.slice(1, 3)}`}>
    <EpisodeList episodes={season} />
  </Layout>
);

export default EpisodesOfSeason;
