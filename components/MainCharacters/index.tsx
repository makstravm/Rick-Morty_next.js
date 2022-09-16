import { FC, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import { routesUrls } from "constants/routes";

import { IMainCharactersProps } from "./types";

import styles from "./MainCharacters.module.scss";
import { ThemeContext } from "context/ThemeContext";
import { ThemeMode } from "constants/theme";

const MainCharacters: FC<IMainCharactersProps> = ({ characters }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      {characters.map((character) => (
        <Link
          href={`${routesUrls.CHARACTER}/${character.id}`}
          key={character.id}
        >
          <a className={styles.character}>
            <div
              className={`${styles.imgBox} ${
                theme === ThemeMode.LIGHT && styles.light
              }`}
            >
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
