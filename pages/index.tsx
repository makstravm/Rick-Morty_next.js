import type { NextPage } from "next";
import Layout from "components/Layout";

import style from "../styles/Home.module.scss";
import MainCharacters from "components/MainCharacters";

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.BASE_URL}/character/1,2`);

  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { characters: data },
  };
};

const Home: NextPage = ({ characters }: any) => (
  <Layout title="Home">
    <div className={`${style.container} container`}>
      <div className={style.title}>
        <h1>
          Rick <span>and</span> Morty
        </h1>
        <p>
          An animated series on adult-swim about the infinite adventures of
          Rick, a genius alcoholic and careless scientist, with his grandson
          Morty, a 14 year-old anxious boy who is not so smart. Together, they
          explore the infinite universes; causing mayhem and running into
          trouble.
        </p>
      </div>
      <MainCharacters characters={characters} />
    </div>
  </Layout>
);

export default Home;
