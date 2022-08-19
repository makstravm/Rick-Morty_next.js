import { FC, MouseEvent, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { API } from "api";
import { UserContext } from "context/userContext";

import { routesUrls } from "constants/routes";

import FavoriteBtn from "components/FavoriteBtn";

import { ICharacter } from "../Character/types";
import { IEpisodeProps } from "./types";

const Episode: FC<IEpisodeProps> = ({
  episodeOne: { id, name, episode, air_date, characters },
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
};

export default Episode;
