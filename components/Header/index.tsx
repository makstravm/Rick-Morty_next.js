import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { routesUrls } from "constants/routes";
import { navigation } from "constants/navigation";

import UserPanel from "./UserPanel";

import logo from "public/logo.png";
import FavoriteBtn from "components/FavoriteBtn";

const Header = () => {
  const { pathname } = useRouter();

  return (
    <header>
      <nav>
        <Link href={routesUrls.HOME}>
          <a className="logo">
            <Image src={logo} alt="logo" />
          </a>
        </Link>
        <FavoriteBtn />
        <div>
          {navigation.map(({ id, title, path }) => (
            <Link
              key={id}
              href={`${
                path === routesUrls.CHARACTERS || path === routesUrls.LOCATIONS
                  ? path + "/1"
                  : path
              }`}
            >
              <a className={`link ${pathname === path ? "--active" : ""}`}>
                {title}
              </a>
            </Link>
          ))}
          <UserPanel />
        </div>
      </nav>
    </header>
  );
};

export default Header;
