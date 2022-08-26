import Image from "next/image";
import Link from "next/link";
import imageError from "public/imageError.png";
import { routesUrls } from "constants/routes";
import { IPageErrorProps } from "types/types";
import { useRouter } from "next/router";

const PageError = ({ codeError }: IPageErrorProps) => {
  const route = useRouter();

  return (
    <div className="page-error">
      <div
        className="bg"
        style={{ backgroundImage: `url(/bgError.jpg)` }}
      ></div>
      <div className="container">
        <div className="page-error__inner">
          <span className="page-error__first-number">{codeError[0]}</span>
          <div className="page-error__image-box">
            <Image src={imageError} alt="error iamge" />
          </div>
          <span className="page-error__second-number">
            {codeError[codeError.length - 1]}
          </span>
        </div>
        <div className="page-error__link">
          <Link href={routesUrls.HOME}>
            <a> Go Home</a>
          </Link>
          <button onClick={() => route.back()}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default PageError;
