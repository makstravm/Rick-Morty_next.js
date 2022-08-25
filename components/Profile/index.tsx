import { FC } from "react";
import Image from "next/image";

import { routesUrls } from "constants/routes";

import DetailsList from "components/DetailsList/DetailsList";

import { randomLinkUserImage } from "helpers/randomUserImg";

import { IProfileProps } from "./types";

import style from "./Profile.module.scss";

const Profile: FC<IProfileProps> = ({
  user: { name },
  favoritesUser: {
    favorites: { characters, episodes },
  },
}) => (
  <section className={`container ${style.profile}`}>
    <div className={style.boxImg}>
      <Image width={150} height={150} src={randomLinkUserImage()} alt={name} />
    </div>
    <div className={`description ${style.description}`}>
      <h6>
        Name<span>{name}</span>
      </h6>
      <p>My Favorites</p>
      <div className={style.boxFavorites}>
        <DetailsList
          arr={characters}
          title="Characters"
          route={routesUrls.CHARACTER}
        />
        <DetailsList
          arr={episodes}
          title="Episodes"
          route={routesUrls.EPISODE}
        />
      </div>
    </div>
  </section>
);

export default Profile;
