import { MouseEvent, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { API } from "api";
import { UserContext } from "context/userContext";

import { routesUrls } from "constants/routes";

import FavoriteBtn from "components/FavoriteBtn";

import { ICharacter, ICharacterProps } from "./types";

import style from "./Character.module.scss";
import DetailsList from "components/DetailsList/DetailsList";

const Character = ({ character }: ICharacterProps) => {
  const { user, setUser } = useContext(UserContext);

  const route = useRouter();

  const isFavorite =
    user && user?.favorites?.characters.some((c) => c.id === character.id);

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
        (c) => c.id !== character.id
      );
    } else {
      updatedCharacters = [
        ...user.favorites.characters,
        { id: character.id, name: character.name },
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
    <section className={`${style.character} container`}>
      <div className={style.boxImg}>
        <Image
          width={250}
          height={250}
          src={character.image}
          alt={character.name}
        />
        <div className={style.characterFavorite}>
          <FavoriteBtn
            isFavorite={isFavorite}
            handleClick={handleFavoiteCharacterClick}
          />
        </div>
        <span
          className={`${style?.status} ${
            style[character?.status?.toLowerCase()]
          }`}
        >
          {character.status}
        </span>
      </div>
      <div className={`${style.description} description`}>
        <div>
          <h3>{character.name}</h3>
        </div>
        <p>
          Gender<span>{character.gender}</span>
        </p>
        <p>
          Species<span>{character.species}</span>
        </p>
        <p>
          Origin
          {character?.origin?.id ? (
            <Link href={routesUrls.LOCATION + "/" + character.location.id}>
              <a>{character.origin.name}</a>
            </Link>
          ) : (
            <span>---</span>
          )}
        </p>
        <p>
          Location
          {character?.location?.id ? (
            <Link href={routesUrls.LOCATION + "/" + character.location.id}>
              <a>{character.location.name}</a>
            </Link>
          ) : (
            <span>---</span>
          )}
        </p>
        <DetailsList
          title="Episodes"
          arr={character.episode}
          route={routesUrls.EPISODE}
        />
      </div>
    </section>
  );
};

export default Character;
