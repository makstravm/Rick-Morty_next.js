import { ICharacter } from "../Character/types";

export interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Pick<ICharacter, "id" | "name" | "name">[];
}
export interface ILocationProps {
  locationOne: ILocation;
}
