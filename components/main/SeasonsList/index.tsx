import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { routesUrls } from "constants/routes";

import style from "./SeasonsList.module.scss";
import { ISeasonsProps } from "./types";

const SeasonList: FC<ISeasonsProps> = ({ seasons }) => (
  <section className={`container ${style.episodes}`}>
    {seasons.map(({ id, season, image }) => (
      <Link href={`${routesUrls.SEASONS}/${season.toLowerCase()}`} key={id}>
        <a className={style.link}>
          <div className={style.imgBox}>
            <Image src={image} alt={season} width={275} height={315} priority />
          </div>
          <span className={style.seasonNum}>{season}</span>
        </a>
      </Link>
    ))}
  </section>
);

export default SeasonList;
