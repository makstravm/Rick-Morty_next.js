import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { routesUrls } from "constants/routes";
import { IEpisodesProps } from "types/types";
import style from "styles/EpisodesList.module.scss";

const EpisodesList: FC<IEpisodesProps> = ({ episodes }) => (
  <div className={`container ${style.episodes}`}>
    {episodes.map(({ id, season, image }) => (
      <Link href={`${routesUrls.EPISODES}/${season}`} key={id}>
        <a className={style.link}>
          <div className={style.imgBox}>
            <Image src={image} alt={season} width={275} height={315} priority />
          </div>
          <span className={style.seasonNum}>{season}</span>
        </a>
      </Link>
    ))}
  </div>
);

export default EpisodesList;
