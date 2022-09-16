import { FC, MouseEvent, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { routesUrls } from "constants/routes";

import FavoriteBtn from "components/FavoriteBtn";

import { UserContext } from "context/UserContext";

import { API } from "api";

import { IFavoritesUser } from "components/Profile/types";
import { ICharactersListProps } from "./types";
import { ICharacter } from "../Character/types";

const { CHARACTER } = routesUrls;

const CharachterItem: FC<Pick<ICharacter, "image" | "id" | "name">> = ({
  id,
  image,
  name,
}) => {
  const { user, favoritesUser, setFavoritesUser } = useContext(UserContext);

  const route = useRouter();

  const isFavorite =
    user && favoritesUser?.favorites?.characters.some((c) => c.id === id);

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

    let updatedCharacters: Pick<ICharacter, "id" | "name" | "image">[] | [] =
      [];

    if (isFavorite) {
      updatedCharacters =
        favoritesUser?.favorites?.characters.filter((c) => c.id !== id) || [];
    } else {
      updatedCharacters = [
        ...favoritesUser.favorites.characters,
        {
          id: id,
          name: name,
          image: image,
        },
      ];
    }

    const updatedFavoritesUser: IFavoritesUser = {
      ...favoritesUser,
      favorites: {
        episodes: favoritesUser?.favorites?.episodes || [],
        characters: updatedCharacters,
      },
    };

    API.put(`favoritesUser/${user.id}`, updatedFavoritesUser)
      .then((res) => setFavoritesUser(res))
      .catch(() => setFavoritesUser(favoritesUser));
  };

  return (
    <div className="characters-list__item">
      <Link href={`${CHARACTER}/${id}`}>
        <a>
          <div className="characters-list__box-img">
            <Image src={image} alt={name} width={176} height={176} />
            <div className="characters-list__favorite">
              <FavoriteBtn
                isFavorite={isFavorite}
                handleClick={handleFavoiteCharacterClick}
              />
            </div>
          </div>
          <p>{name}</p>
        </a>
      </Link>
    </div>
  );
};

const CharactersList: FC<ICharactersListProps> = ({ characters }) => {
  return (
    <section className="container characters-list">
      {characters.map((character) => (
        <CharachterItem key={character.id} {...character} />
      ))}
    </section>
  );
};

export default CharactersList;
