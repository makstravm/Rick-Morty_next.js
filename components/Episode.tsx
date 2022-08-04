import { routesUrls } from "constants/routes";
import Link from "next/link";
import { FC } from "react";
import { IEpisodeProps } from "types/types";
import styles from "../styles/Episode.module.scss";

const Episode: FC<IEpisodeProps> = ({
  episodeOne: { name, episode, air_date, characters },
}) => (
  <section className={`container ${styles.episode}`}>
    <h4>
      Episode {episode.slice(-2)}
      <span> Season {episode.slice(1, 3)}</span>
    </h4>
    <div className="">
      <h6>
        Name <span> {name}</span>
      </h6>
      <p>
        Air data <span> {air_date}</span>
      </p>
      <details>
        <summary>
          Characters <span>{`( ${characters.length} )`}</span>
        </summary>
        <div>
          {characters.map(({ id, name }) => (
            <Link key={id} href={routesUrls.CHARACTER + "/" + id}>
              <a>
                {name}
                <span>,&#32;</span>
              </a>
            </Link>
          ))}
        </div>
      </details>
    </div>
  </section>
);

export default Episode;
