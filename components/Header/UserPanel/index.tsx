import Link from "next/link";

import { routesUrls } from "constants/routes";

import style from "./UserPanel.module.scss";

const UserPanel = () => {
  return (
    <div className={style.userPanel}>
      <Link href={routesUrls.LOGIN}>
        <a>Sign In</a>
      </Link>
    </div>
  );
};

export default UserPanel;
