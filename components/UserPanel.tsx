import { routesUrls } from "constants/routes";
import Link from "next/link";
import style from "styles/UserPanel.module.scss";

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
