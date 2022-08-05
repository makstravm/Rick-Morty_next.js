import { routesUrls } from "constants/routes";
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
        Created
        <span>{new Date(character.created).toLocaleDateString()}</span>
      </p>
      <p>
        Origin
        {character?.origin?.id ? (
          <Link href={character.origin.id}>
            <a>{character.origin.name}</a>
          </Link>
        ) : (
          <span>---</span>
        )}
      </p>
      <p>
        Location
        {character?.location?.id ? (
          <Link href={character.location.id}>
            <a>{character.location.name}</a>
          </Link>
        ) : (
          <span>---</span>
        )}
      </p>
      <details>
        <summary>
          Episodes <span>{`( ${character.episode.length} )`}</span>
        </summary>
        <div>
          {character.episode.map(({ id, name }) => (
            <Link key={id} href={routesUrls.EPISODE + "/" + id}>
              <a>
                {name}
                <span>,&nbsp;</span>
              </a>
            </Link>
          ))}
        </div>
      </details>
    </div>
  </section>
);

export default Character;
