import { FC } from "react";
import Link from "next/link";

import { routesUrls } from "constants/routes";

import { ILocationsListProps } from "./types";

import style from "../styles/LocationsList.module.scss";

const { LOCATION } = routesUrls;

const LocationsList: FC<ILocationsListProps> = ({ locations }) => (
  <section className="container">
    <ul className={style.locations}>
      {locations.map(({ id, name }) => (
        <li key={id}>
          <span>{id}.&nbsp;</span>
          <Link href={`${LOCATION}/${id}`}>
            <a>{name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default LocationsList;
