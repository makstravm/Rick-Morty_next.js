import { ICharacter } from "../Character/types";

export interface IEpisodeData {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Pick<ICharacter, "id" | "name" | "image">[];
}

export interface IEpisodeProps {
  episodeOne: IEpisodeData;
}
