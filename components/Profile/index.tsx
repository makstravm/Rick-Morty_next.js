import { FC } from "react";
import { IProfileProps } from "./types";
import Image from "next/image";

import userImage from "public/user.png";
import style from "./Profile.module.scss";

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
      <div className={style.boxFavorites}></div>
    </div>
  </section>
);

export default Profile;
