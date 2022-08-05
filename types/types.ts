import { ReactNode } from "react";

export interface IResponse<T> {
  info: IAllInfo;
  results: T[];
}

export interface IAllInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface IResponseSeasonsData {
  id: number;
  image: string;
  season: string;
}

export interface IEpisodeData {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Pick<ICharacter, "id" | "name">[];
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  created: string;
  location: Pick<ILocations, "id" | "name">;
  origin: Pick<ILocations, "id" | "name">;
  episode: Pick<IEpisodeData, "id" | "name">[];
}

export interface ILocations {
  id: string;
  name: String;
  type: String;
  dimension: String;
  residents: Pick<ICharacter, "id" | "name">[];
  created: String;
}

export interface ILayoutProps {
  children: ReactNode;
  title: string;
}

export interface IHomeProps {
  characters: Pick<ICharacter, "id" | "name" | "image">[];
}

export interface IMainCharactersProps {
  characters: Pick<ICharacter, "id" | "name" | "image">[];
}

export interface ICharactersProps {
  info: Omit<IAllInfo, "count">;
  results: Pick<ICharacter, "id" | "name" | "image">[];
}

export interface ICharactersListProps {
  characters: Pick<ICharacter, "id" | "name" | "image">[];
}

export interface IPaginationProps {
  info: Omit<IAllInfo, "count">;
  path: string;
}

export interface IPageCharacterProps {
  character: ICharacter;
}

export interface ICharacterProps {
  character: ICharacter;
}

export interface IPageErrorProps {
  codeError: string;
}

export interface IEpisodesListProps {
  episodes: Pick<IEpisodeData, "id" | "name" | "episode">[];
}

export interface IEpisodesOfSeasonsProps {
  season: Pick<IEpisodeData, "id" | "name" | "episode">[];
}

export interface IEpisodePageProps {
  episodeData: IEpisodeData;
}

export interface IEpisodeProps {
  episodeOne: IEpisodeData;
}
screenLeft;
export interface ISeasonsProps {
  seasons: IResponseSeasonsData[];
}

export interface ILocationsPageProps {
  info: Omit<IAllInfo, "count">;
  results: Pick<ILocations, "id" | "name">[];
}
