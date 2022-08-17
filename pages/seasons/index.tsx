import { GetStaticProps, NextPage } from "next";
import Layout from "components/Layout";
import SeasonsList from "components/main/SeasonsList";
import { ISeasonsProps } from "components/main/SeasonsList/types";
import { API } from "api";

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await API.get(`seasons`);

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
