import { GetStaticProps, NextPage } from "next";
import Layout from "components/Layout";
import SeasonsList from "components/SeasonsList";
import { ISeasonsProps } from "types/types";

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
      props: { seasons: data },
      revalidate: 20,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const Seasons: NextPage<ISeasonsProps> = ({ seasons }) => (
  <Layout title="Seasons">
    <SeasonsList seasons={seasons} />
  </Layout>
);

export default Seasons;
