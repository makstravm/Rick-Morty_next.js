import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { ICharactersListProps } from "types/types";
import { checkRouteCharacter } from "helpers/checkRouteCharacter";

const CharactersList: FC<ICharactersListProps> = ({ characters }) => (
  <div className="container characters-list">
    {characters.map((character) => (
      <div className="characters-list__item" key={character.id}>
        <Link href={`${checkRouteCharacter(character.id)}/${character.id}`}>
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
  </div>
);

export default CharactersList;
