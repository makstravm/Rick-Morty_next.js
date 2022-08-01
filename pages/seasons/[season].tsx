import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import Layout from "components/Layout";

import {
  IEpisodesOfSeasonsProps,
  IResponse,
  IResponseEpisodeData,
  IResponseSeasonsData,
} from "types/types";

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
  const response = await fetch(
    `${process.env.BASE_URL}/episode/?episode=${context.params?.season}`
  );

  const data: IResponse<IResponseEpisodeData> = await response.json();

  if (!data?.results) {
    return {
      notFound: true,
    };
  }

  return {
    props: { season: data.results },
  };
};

const EpisodesOfSeason: NextPage<IEpisodesOfSeasonsProps> = ({ season }) => (
  <Layout title="Season">
    <div>{season[0].name}</div>
  </Layout>
);

export default EpisodesOfSeason;
