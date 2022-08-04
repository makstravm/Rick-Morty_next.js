import { FC } from "react";
import Image from "next/image";
import { routesUrls } from "constants/routes";
import Link from "next/link";

import { ICharactersListProps } from "types/types";

const { CHARACTER } = routesUrls;

const CharactersList: FC<ICharactersListProps> = ({ characters }) => (
  <section className="container characters-list">
    {characters.map((character) => (
      <div className="characters-list__item" key={character.id}>
        <Link href={`${CHARACTER}/${character.id}`}>
          <a>
            <Image
              src={character.image}
              alt={character.name}
              width={176}
              height={176}
            />
            <p>{character.name}</p>
          </a>
        </Link>
      </div>
    ))}
  </section>
);

export default CharactersList;
