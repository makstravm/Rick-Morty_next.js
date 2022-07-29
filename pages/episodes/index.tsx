import { GetStaticProps, NextPage } from "next";
import Layout from "components/Layout";
import EpisodesList from "components/EpisodesList";
import { IEpisodesProps } from "types/types";

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_URL}/episodes`);

    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { episodes: data },
      revalidate: 20,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const Episodes: NextPage<IEpisodesProps> = ({ episodes }) => (
  <Layout title="Episodes">
    <EpisodesList episodes={episodes} />
  </Layout>
);

export default Episodes;
