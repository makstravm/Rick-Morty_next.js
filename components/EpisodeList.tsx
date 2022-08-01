import { FC } from "react";
import { IEpisodesListProps } from "types/types";
import styles from "../styles/EpisodeList.module.scss";

const EpisodesList: FC<IEpisodesListProps> = ({ episodes }) => (
  <div className={`container ${styles.episodeList}`}>
    <h4>Season {episodes?.[0].episode.slice(1, 3)}</h4>
    {episodes.map(({ id, name, air_date, characters, episode }) => (
      <div key={id} className={styles.episodeBox}>
        <div className={styles.episodeNum}>{episode.slice(-2)}</div>
        <div className={styles.episodeDescription}>
          <h5>
            Episode name <span>{name}</span>
          </h5>
          <p>
            Air Date: <span>{air_date}</span>
          </p>
          <p>
            Number of Characters: <span>{characters.length}</span>
          </p>
        </div>
        <br />
      </div>
    ))}
  </div>
);

export default EpisodesList;
