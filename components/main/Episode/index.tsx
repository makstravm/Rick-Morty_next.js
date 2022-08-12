import { FC } from "react";
import Link from "next/link";

import { routesUrls } from "constants/routes";

import { IEpisodeProps } from "./types";

const Episode: FC<IEpisodeProps> = ({
  episodeOne: { name, episode, air_date, characters },
}) => (
  <section className={`container `}>
    <h4>
      Episode {episode.slice(-2)}
      <span style={{ display: "block", fontSize: "1.4rem", color: "#ececec" }}>
        ( Season {episode.slice(1, 3)} )
      </span>
    </h4>
    <div className="description">
      <h6>
        Name<span>{name}</span>
      </h6>
      <p>
        Airdata<span>{air_date}</span>
      </p>
      <details>
        <summary>
          Characters<span>{`( ${characters.length} )`}</span>
        </summary>
        <div>
          {characters.map(({ id, name }) => (
            <Link key={id} href={routesUrls.CHARACTER + "/" + id}>
              <a>
                {name}
                <span>;&nbsp;</span>
              </a>
            </Link>
          ))}
        </div>
      </details>
    </div>
  </section>
);

export default Episode;
