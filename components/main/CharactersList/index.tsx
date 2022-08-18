import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { routesUrls } from "constants/routes";

import { ICharactersListProps } from "./types";
import FavoriteBtn from "components/FavoriteBtn";

const { CHARACTER } = routesUrls;

const CharactersList: FC<ICharactersListProps> = ({ characters }) => (
  <section className="container characters-list">
    {characters.map((character) => (
      <div className="characters-list__item" key={character.id}>
        <Link href={`${CHARACTER}/${character.id}`}>
          <a>
            <div className="characters-list__box-img">
              <Image
                src={character.image}
                alt={character.name}
                width={176}
                height={176}
              />
              <div className="characters-list__favorite">
                <FavoriteBtn />
              </div>
            </div>
            <p>{character.name}</p>
          </a>
        </Link>
      </div>
    ))}
  </section>
);

export default CharactersList;
