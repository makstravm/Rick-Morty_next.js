import { FC, MouseEvent, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { UserContext } from "context/userContext";
import { routesUrls } from "constants/routes";
import { API } from "api";

import { IEpisodesListProps } from "./types";
import { IEpisodeData } from "../Episode/types";
import { ICharacter } from "../Character/types";

import styles from "./EpisodeList.module.scss";

const EpisodeItem: FC<Pick<IEpisodeData, "name" | "id" | "episode">> = ({
  id,
  name,
  episode,
}) => {
  const { user, setUser } = useContext(UserContext);

  const route = useRouter();

  const isFavorite =
    user && user?.favorites?.characters.some((c) => c.id === id);

  const handleFavoiteCharacterClick = async (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (!user) {
      return route.push(routesUrls.LOGIN);
    }

    let updatedCharacters: Pick<ICharacter, "id" | "name">[] | [] = [];

    if (isFavorite) {
      updatedCharacters = user?.favorites?.characters.filter(
        (c) => c.id !== id
      );
    } else {
      updatedCharacters = [
        ...user.favorites.characters,
        { id: id, name: name },
      ];
    }

    const newUser = {
      ...user,
      favorites: {
        ...user.favorites,
        characters: updatedCharacters,
      },
    };

    API.put(`users/${user.id}`, newUser)
      .then((res) => setUser(res))
      .catch(() => setUser(user));
  };

  return (
    <Link key={id} href={`${routesUrls.EPISODE}/${id}`}>
      <a className={styles.episodeLink}>
        <div>{episode.slice(-2)}</div>
        <h6>{name}</h6>
      </a>
    </Link>
  );
};

const EpisodesList: FC<IEpisodesListProps> = ({ episodes }) => (
  <section className={`container ${styles.episodeList}`}>
    <h4>Season {episodes?.[0].episode.slice(1, 3)}</h4>
    <div className={styles.episodeBox}>
      {episodes.map((episode) => (
        <EpisodeItem key={episode.id} {...episode} />
      ))}
    </div>
  </section>
);

export default EpisodesList;
