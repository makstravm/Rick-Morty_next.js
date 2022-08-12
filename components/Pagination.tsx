import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { putPagesNumbersInArray } from "helpers/putPagesNumbersInArray";

import { IPaginationProps } from "types/types";
import { API } from "api";

const Pagination: FC<IPaginationProps> = ({ info, path }) => {
  const {
    query: { page: activePage },
  } = useRouter();

  const pages = putPagesNumbersInArray(Number(activePage), info.pages);

  return (
    <ul className="pagination">
      {info.prev && (
        <li>
          <Link href={`${path}/${Number(activePage) - 1}`}>
            <a>prev</a>
          </Link>
        </li>
      )}
      {pages.map((p, i) => (
        <li
          className={`link-num ${activePage === p ? "--active" : ""}`}
          key={i}
        >
          {p !== "..." ? (
            <Link href={`${path}/${p}`}>
              <a>{p}</a>
            </Link>
          ) : (
            <span>{p}</span>
          )}
        </li>
      ))}
      {info.next && (
        <li>
          <Link href={`${path}/${Number(activePage) + 1}`}>
            <a>next</a>
          </Link>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
