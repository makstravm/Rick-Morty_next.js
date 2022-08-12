import { ILocation } from "../Location/types";

export interface ILocationsListProps {
  locations: Pick<ILocation, "id" | "name">[];
}
