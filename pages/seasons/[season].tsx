import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import Layout from "components/Layout";
import EpisodeList from "components/main/EpisodeList";

import { gql } from "api";

import { IResponseSeasonsData } from "components/main/SeasonsList/types";
import { IEpisodesOfSeasonsProps } from "types/types";

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${process.env.API_URL}/seasons`);

  const data: IResponseSeasonsData[] = await response.json();

  const paths = data.map(({ season }) => ({
    params: { season: season.toLowerCase() },
  }));

  return {
    paths,
    fallback: "blocking",
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
