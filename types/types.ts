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

export interface IResponseEpisodeData {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: { id: string }[];
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  created: string;
  location: {
    name: string;
    url: string;
  };
  origin: {
    name: string;
    url: string;
  };
  episode: string[];
  url: string;
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
  episodes: IResponseEpisodeData[];
}
export interface IEpisodesOfSeasonsProps {
  season: IResponseEpisodeData[];
}

export interface ISeasonsProps {
  seasons: IResponseSeasonsData[];
}
