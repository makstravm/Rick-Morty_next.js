import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { IDataListProps } from "./types";

const DetailsList: FC<IDataListProps> = ({ title, arr, route }) => {
  return (
    <details>
      <summary>
        {title}
        <span>{`( ${arr.length} )`}</span>
      </summary>
      <div>
        {arr.map(({ id, name, image }) => (
          <Link key={id} href={route + "/" + id}>
            <a>
              {image && (
                <Image src={image} width="35px" height="35px" alt={name} />
              )}
            </a>
          </Link>
        ))}
      </div>
    </details>
  );
};

export default DetailsList;
