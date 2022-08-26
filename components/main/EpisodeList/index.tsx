import { FC, MouseEvent, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { UserContext } from "context/userContext";
import { routesUrls } from "constants/routes";
import { API } from "api";

import FavoriteBtn from "components/FavoriteBtn";
1;
import { IEpisodesListProps } from "./types";
import { IEpisodeData } from "../Episode/types";
import { ICharacter } from "../Character/types";
import { IFavoritesUser } from "components/Profile/types";

import style from "./EpisodeList.module.scss";

const EpisodeItem: FC<Pick<IEpisodeData, "name" | "id" | "episode">> = ({
  id,
  name,
  episode,
}) => {
  const { user, favoritesUser, setFavoritesUser } = useContext(UserContext);

  const route = useRouter();

  const isFavorite =
    user && favoritesUser?.favorites?.episodes.some((c) => c.id === id);

  const handleFavoiteCharacterClick = async (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (!user) {
      return route.push({
        pathname: routesUrls.LOGIN,
        query: { backpath: route.pathname, page: route.query.page },
      });
    }

    let updatedEpisodes: Pick<ICharacter, "id" | "name">[] | [] = [];

    if (isFavorite) {
      updatedEpisodes =
        favoritesUser?.favorites?.episodes.filter((c) => c.id !== id) || [];
    } else {
      updatedEpisodes = [
        ...(favoritesUser?.favorites?.episodes || []),
        {
          id: id,
          name: name,
        },
      ];
    }

    const updatedFavoritesUser: IFavoritesUser = {
      ...favoritesUser,
      favorites: {
        episodes: updatedEpisodes,
        characters: favoritesUser?.favorites?.characters || [],
      },
    };

    API.put(`favoritesUser/${user.id}`, updatedFavoritesUser)
      .then((res) => setFavoritesUser(res))
      .catch(() => setFavoritesUser(favoritesUser));
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
