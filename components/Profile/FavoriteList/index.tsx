import { FC } from "react";
import Link from "next/link";

import { IFavoriteListProps } from "./type";

export const FavoriteList: FC<IFavoriteListProps> = ({
  list,
  title,
  pathToItem,
  pathToList,
}) => (
  <div>
    <details>
      <summary>
        {title}
        <span>{`( ${list.length} )`}</span>
      </summary>
      <div>
        {!list.length && (
          <Link href={pathToList}>
            <a>{`Go to the list of ${title}`}</a>
          </Link>
        )}
        {list.map(({ id, name }) => (
          <Link key={id} href={pathToItem + "/" + id}>
            <a>
              {name}
              <span>;&nbsp;</span>
            </a>
          </Link>
        ))}
      </div>
    </details>
  </div>
);
