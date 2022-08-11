import { IEpisodeData, ILocation } from "types/types";

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  location: Pick<ILocation, "id" | "name">;
  origin: Pick<ILocation, "id" | "name">;
  episode: Pick<IEpisodeData, "id" | "name">[];
}

export interface ICharacterProps {
  character: ICharacter;
}
