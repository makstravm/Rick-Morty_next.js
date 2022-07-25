import Image from "next/image";
import Link from "next/link";
import image404 from "public/image404.png";
import { routesUrls } from "constants/routes";

const Custom404 = () => (
  <div className="page-404">
    <div className="bg" style={{ backgroundImage: `url(/bg404.jpg)` }}></div>
    <div className="container">
      <div className="page-404__inner">
        <span className="page-404__first-number">4</span>
        <div className="page-404__image-box">
          <Image src={image404} alt="404 iamge" />
        </div>
        <span className="page-404__second-number">4</span>
      </div>
      <div className="page-404__link">
        <Link href={routesUrls.HOME}>
          <a> Go Home</a>
        </Link>
      </div>
    </div>
  </div>
);

export default Custom404;
