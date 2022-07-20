import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ICharacter } from "types/responseTypes";

interface ICharactersListProps {
  characters: ICharacter[];
}

const CharactersList: FC<ICharactersListProps> = ({ characters }) => (
  <div className="container list">
    {characters.map((character) => (
      <div className="list__item" key={character.id}>
        <Link href={character.url}>
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
