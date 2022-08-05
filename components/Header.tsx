import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { routesUrls } from "constants/routes";
import { navigation } from "constants/navigation";

import logo from "public/logo.png";

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
              <a className={`link ${pathname === path ? "--active" : ""}`}>
                {title}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
