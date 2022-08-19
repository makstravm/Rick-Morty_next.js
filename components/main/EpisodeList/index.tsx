import { FC, MouseEvent, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { UserContext } from "context/userContext";
import { routesUrls } from "constants/routes";
import { API } from "api";

import { IEpisodesListProps } from "./types";
import { IEpisodeData } from "../Episode/types";
import { ICharacter } from "../Character/types";

import style from "./EpisodeList.module.scss";
import FavoriteBtn from "components/FavoriteBtn";

const EpisodeItem: FC<Pick<IEpisodeData, "name" | "id" | "episode">> = ({
  id,
  name,
  episode,
}) => {
  const { user, setUser } = useContext(UserContext);

  const route = useRouter();

  const isFavorite = user && user?.favorites?.episodes.some((c) => c.id === id);

  const handleFavoiteCharacterClick = async (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (!user) {
      return route.push(routesUrls.LOGIN);
    }

    let updatedEpisodes: Pick<ICharacter, "id" | "name">[] | [] = [];

    if (isFavorite) {
      updatedEpisodes = user?.favorites?.episodes.filter((c) => c.id !== id);
    } else {
      updatedEpisodes = [...user.favorites.episodes, { id: id, name: name }];
    }

    const newUser = {
      ...user,
      favorites: {
        ...user.favorites,
        episodes: updatedEpisodes,
      },
    };

    API.put(`users/${user.id}`, newUser)
      .then((res) => setUser(res))
      .catch(() => setUser(user));
  };

  return (
    <Link key={id} href={`${routesUrls.EPISODE}/${id}`}>
      <a className={style.episodeLink}>
        <div>{episode.slice(-2)}</div>
        <h6>{name}</h6>
        <div className={style.characterFavorite}>
          <FavoriteBtn
            isFavorite={isFavorite}
            handleClick={handleFavoiteCharacterClick}
          />
        </div>
      </a>
    </Link>
  );
};

const EpisodesList: FC<IEpisodesListProps> = ({ episodes }) => (
  <section className={`container ${style.episodeList}`}>
    <h4>Season {episodes?.[0].episode.slice(1, 3)}</h4>
    <div className={style.episodeBox}>
      {episodes.map((episode) => (
        <EpisodeItem key={episode.id} {...episode} />
      ))}
    </div>
  </section>
);

export default EpisodesList;
