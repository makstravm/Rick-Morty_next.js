import { putPagesNumbersInArray } from "helpers/putPagesNumbersInArray";
import { useRouter } from "next/router";
import { IAllInfo } from "types/responseTypes";

interface IPaginationProps {
  info: IAllInfo;
}
const Pagination = ({ info }: IPaginationProps) => {
  const {
    query: { page: activePage },
  } = useRouter();

  const pages = putPagesNumbersInArray(Number(activePage), info.pages);

  return <>{info.pages}</>;
};

export default Pagination;
