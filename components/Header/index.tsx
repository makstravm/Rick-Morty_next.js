import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { routesUrls } from "constants/routes";
import { navigation } from "constants/navigation";

import UserPanel from "./UserPanel";

import logo from "public/logo.png";
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";
import ToggleTheme from "./ToggleTheme";

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
              <a
                className={`link ${
                  pathname.split("/")[1] === path.slice(1) ? "--active" : ""
                }`}
              >
                {title}
              </a>
            </Link>
          ))}
          <ToggleTheme />
          <UserPanel />
        </div>
      </nav>
    </header>
  );
};

export default Header;
