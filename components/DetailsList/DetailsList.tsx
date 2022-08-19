import { FC } from "react";
import Link from "next/link";
import { IDataListProps } from "./types";

const DetailsList: FC<IDataListProps> = ({ title, arr, route }) => {
  return (
    <details>
      <summary>
        {title}
        <span>{`( ${arr.length} )`}</span>
      </summary>
      <div>
        {arr.map(({ id, name }) => (
          <Link key={id} href={route + "/" + id}>
            <a>
              {name}
              <span>;&nbsp;</span>
            </a>
          </Link>
        ))}
      </div>
    </details>
  );
};

export default DetailsList;
