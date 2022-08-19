import { FC } from "react";

import { routesUrls } from "constants/routes";

import { ILocationProps } from "./types";
import DetailsList from "components/DetailsList/DetailsList";

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
      <DetailsList
        arr={residents}
        title="Residents"
        route={routesUrls.CHARACTER}
      />
    </div>
  </section>
);

export default Location;
