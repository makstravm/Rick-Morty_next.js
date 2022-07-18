import Image from 'next/image';
import Link from 'next/link';

import { routesUrls } from 'constants/routes';
import { navigation } from 'constants/navigation';

import logo from 'public/logo.png';

const { MAIN } = routesUrls;

const NavBar = () => (
  <nav>
    <div className="container">
      <Link href={MAIN}>
        <Image src={logo} alt="logo" />
      </Link>
      <div className="nav">
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            {title}
          </Link>
        ))}
      </div>
    </div>
  </nav>
);

export default NavBar;
