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
  characters: string[];
  url: string;
  created: string;
}

export interface IEpisodesOfSeasonsProps {
  season: IResponseEpisodeData[];
}

export interface ISeasonsProps {
  seasons: IResponseSeasonsData[];
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
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

export interface IHomeProps {
  characters: ICharacter[];
}

export interface ILayoutProps {
  children: ReactNode;
  title: string;
}

export interface IMainCharactersProps {
  characters: ICharacter[];
}

export interface IPaginationProps {
  info: IAllInfo;
  path: string;
}

export interface ICharactersListProps {
  characters: ICharacter[];
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
