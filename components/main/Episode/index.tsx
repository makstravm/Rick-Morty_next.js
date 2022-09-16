import { FC, MouseEvent, useContext } from "react";
import { useRouter } from "next/router";

import { API } from "api";
import { UserContext } from "context/UserContext";

import { routesUrls } from "constants/routes";

import FavoriteBtn from "components/FavoriteBtn";
import DetailsList from "components/DetailsList/DetailsList";

import { IFavoritesUser } from "components/Profile/types";
import { ICharacter } from "../Character/types";
import { IEpisodeProps } from "./types";

const Episode: FC<IEpisodeProps> = ({
  episodeOne: { id, name, episode, air_date, characters },
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
    <section className={`container`}>
      <h4>
        Episode {episode.slice(-2)}
        <span
          style={{ display: "block", fontSize: "1.4rem", color: "#ececec" }}
        >
          ( Season {episode.slice(1, 3)} )
          <FavoriteBtn
            isFavorite={isFavorite}
            handleClick={handleFavoiteCharacterClick}
          />
        </span>
      </h4>
      <div className="description">
        <h6>
          Name<span>{name}</span>
        </h6>
        <p>
          Airdata<span>{air_date}</span>
        </p>
        <DetailsList
          title="Characters"
          route={routesUrls.CHARACTER}
          arr={characters}
        />
      </div>
    </section>
  );
};

export default Episode;
