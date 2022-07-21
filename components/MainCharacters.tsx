import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { IMainCharactersProps } from "types/types";
import { routesUrls } from "constants/routes";
import styles from "../styles/MainCharacters.module.scss";

const MainCharacters: FC<IMainCharactersProps> = ({ characters }) => {
  return (
    <div className={styles.container}>
      {characters.map((character) => (
        <Link
          href={`${routesUrls.CHARACTER_MAIN}/${character.id}`}
          key={character.id}
        >
          <a className={styles.character}>
            <div className={styles.imgBox}>
              <Image
                src={character.image}
                alt={character.name}
                width={175}
                height={175}
              />
            </div>
            <span>{character.name}</span>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default MainCharacters;
