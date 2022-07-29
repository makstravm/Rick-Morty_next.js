import Layout from "components/Layout";
import { GetStaticProps, NextPage } from "next";
import { IEpisodesProps } from "types/types";

export const getStaticProps: GetStaticProps = async () => {
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
};

const Episodes: NextPage<IEpisodesProps> = ({ episodes }) => {
  return <Layout title="Characters">ji{episodes.length}</Layout>;
};

export default Episodes;
