import { ICharacter } from "components/main/Character/types";

export interface IDataListProps {
  title: string;
  route: string;
  arr: Pick<ICharacter, "id" | "name">[];
}
