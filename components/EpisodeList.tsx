import Link from "next/link";
import { FC } from "react";
import { IEpisodesListProps } from "types/types";
import styles from "../styles/EpisodeList.module.scss";

const EpisodesList: FC<IEpisodesListProps> = ({ episodes }) => (
  <section className={`container ${styles.episodeList}`}>
    <h4>Season {episodes?.[0].episode.slice(1, 3)}</h4>
    <div className={styles.episodeBox}>
      {episodes.map(({ id, name, air_date, characters, episode }) => (
        <Link key={id} href="">
          <a className={styles.episodeLink}>
            <div>{episode.slice(-2)}</div>
            <h6>{name}</h6>
          </a>
        </Link>
      ))}
    </div>
  </section>
);

export default EpisodesList;
