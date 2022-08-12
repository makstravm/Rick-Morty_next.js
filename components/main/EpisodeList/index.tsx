import { FC } from "react";
import Link from "next/link";

import { routesUrls } from "constants/routes";

import { IEpisodesListProps } from "./types";

import styles from "./EpisodeList.module.scss";

const EpisodesList: FC<IEpisodesListProps> = ({ episodes }) => (
  <section className={`container ${styles.episodeList}`}>
    <h4>Season {episodes?.[0].episode.slice(1, 3)}</h4>
    <div className={styles.episodeBox}>
      {episodes.map(({ id, name, episode }) => (
        <Link key={id} href={`${routesUrls.EPISODE}/${id}`}>
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
