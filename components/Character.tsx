import Image from "next/image";
import Link from "next/link";
import { ICharacterProps } from "types/types";
import style from "../styles/Character.module.scss";

const Character = ({ character }: ICharacterProps) => (
  <section className={`${style.character} container`}>
    <div className={style.boxImg}>
      <Image
        width={250}
        height={250}
        src={character.image}
        alt={character.name}
      />
      <span
        className={`${style?.status} ${
          style[character?.status?.toLowerCase()]
        }`}
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
      <div>
        <span>Origin:</span>
        {character?.origin?.url ? (
          <Link href={character.origin.url}>
            <a>{character.origin.name}</a>
          </Link>
        ) : (
          <span>---</span>
        )}
      </div>
      <div>
        <span>Location:</span>
        {character?.location?.url ? (
          <Link href={character.location.url}>
            <a>{character.location.name}</a>
          </Link>
        ) : (
          <span>---</span>
        )}
      </div>
    </div>
  </section>
);

export default Character;
