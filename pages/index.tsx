import type { NextPage } from "next";
import Layout from "@components/Layout";

import style from "../styles/Home.module.scss";

const Home: NextPage = () => (
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
      <div></div>
    </div>
  </Layout>
);

export default Home;
