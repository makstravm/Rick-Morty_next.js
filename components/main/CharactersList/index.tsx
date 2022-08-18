import { FC, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { routesUrls } from "constants/routes";

import FavoriteBtn from "components/FavoriteBtn";
import { UserContext } from "context/userContext";

import { API } from "api";

import { ICharactersListProps } from "./types";
import { ICharacter } from "../Character/types";

const { CHARACTER } = routesUrls;

const CharachterItem: FC<Pick<ICharacter, "image" | "id" | "name">> = ({
  id,
  image,
  name,
}) => {
  const { user, setUser } = useContext(UserContext);

  const route = useRouter();

  const isFavorite =
    user && user?.favorites?.characters.some((c) => c.id === id);

  const handleFavoiteClick = async () => {
    if (!user) {
      return route.push(routesUrls.LOGIN);
    }

    let updatedCharacters: Pick<ICharacter, "id" | "name">[] | [] = [];

    if (isFavorite) {
      updatedCharacters = user?.favorites?.characters.filter(
        (c) => c.id !== id
      );
    } else {
      updatedCharacters = [...user.favorites.characters, { id, name }];
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
    <div className="characters-list__item">
      <button onClick={handleFavoiteClick}>asdsad</button>
      <Link href={`${CHARACTER}/${id}`}>
        <a>
          <div className="characters-list__box-img">
            <Image src={image} alt={name} width={176} height={176} />
            <div className="characters-list__favorite">
              <FavoriteBtn />
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
