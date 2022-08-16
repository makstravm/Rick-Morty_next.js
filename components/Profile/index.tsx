import { FC } from "react";
import Image from "next/image";

import { IProfileProps } from "./types";

import userImage from "public/user.png";
import style from "./Profile.module.scss";
import { FavoriteList } from "./FavoriteList";
import { routesUrls } from "constants/routes";

const Profile: FC<IProfileProps> = ({
  user: {
    name,
    favorites: { characters, episodes },
  },
}) => (
  <section className={`container ${style.profile}`}>
    <div className={style.boxImg}>
      <Image width={150} height={150} src={userImage} alt={name} />
    </div>
    <div className="description location">
      <h6>
        Name<span>{name}</span>
      </h6>
      <p>My Favorites</p>
      <div className={style.boxFavorites}>
        <FavoriteList
          list={characters}
          title="Characters"
          path={routesUrls.CHARACTERS}
        />
        <FavoriteList
          list={episodes}
          title="Episodes"
          path={routesUrls.SEASONS}
        />
      </div>
    </div>
  </section>
);

export default Profile;
