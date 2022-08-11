import { ICharacter } from "components/main/Character/types";
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

export interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Pick<ICharacter, "id" | "name">[];
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
export interface ISeasonsProps {
  seasons: IResponseSeasonsData[];
}

export interface ILocationsPageProps {
  info: Omit<IAllInfo, "count">;
  results: Pick<ILocation, "id" | "name">[];
}

export interface ILocationsListProps {
  locations: Pick<ILocation, "id" | "name">[];
}

export interface ILocationPageProps {
  location: ILocation;
}

export interface ILocationProps {
  locationOne: ILocation;
}
