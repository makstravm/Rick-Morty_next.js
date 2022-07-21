import Image from "next/image";
import Link from "next/link";
import { ICharacterProps } from "types/types";
import style from "../styles/Character.module.scss";

const Character = ({ character }: ICharacterProps) => (
  <div className={`${style.character} container`}>
    <div className={style.boxImg}>
      <Image
        width={250}
        height={250}
        src={character.image}
        alt={character.name}
      />
      <span
        className={`${style.status} ${style[character.status.toLowerCase()]}`}
      >
        {character.status}
      </span>
    </div>
    <div className={style.description}>
      <div>
        <h3>{character.name}</h3>
      </div>
      <div>
        <span>Gender:</span>
        <span>{character.gender}</span>
      </div>
      <div>
        <span>Species:</span>
        <span>{character.species}</span>
      </div>
      <div>
        <span>Created:</span>
        <span>{new Date(character.created).toLocaleDateString()}</span>
      </div>
      <div>
        <span>Episodes:</span>
        <span>{character.episode.length}</span>
      </div>
      {character?.origin?.url && (
        <div>
          <span>Origin:</span>
          <Link href={character.origin.url}>
            <a>{character.origin.name}</a>
          </Link>
        </div>
      )}
      <div>
        <span>Location:</span>
        <Link href={character.location.url}>
          <a>{character.location.name}</a>
        </Link>
      </div>
    </div>
  </div>
);

export default Character;
