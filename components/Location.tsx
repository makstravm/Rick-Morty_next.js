import { FC } from "react";
import { routesUrls } from "constants/routes";
import Link from "next/link";
import { ILocationProps } from "types/types";

const Location: FC<ILocationProps> = ({
  locationOne: { name, type, dimension, residents },
}) => (
  <section className={`container`}>
    <div className="description location">
      <h6>
        Name<span>{name}</span>
      </h6>
      <p>
        Type<span>{type}</span>
      </p>
      <p>
        Dimension<span>{dimension}</span>
      </p>
      <details>
        <summary>
          Residents<span>{`( ${residents.length} )`}</span>
        </summary>
        <div>
          {residents.map(({ id, name }) => (
            <Link key={id} href={routesUrls.CHARACTER + "/" + id}>
              <a>
                {name}
                <span>;&nbsp;</span>
              </a>
            </Link>
          ))}
        </div>
      </details>
    </div>
  </section>
);

export default Location;
