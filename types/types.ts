import { ReactNode } from "react";

export interface IResponse<T> {
  info: IAllInfo;
  results: T[];
}

export interface IAllInfo {
  count: number | null;
  pages: number;
  next: string | null;
  prev: string | null;
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
export interface IMainCharacterProps {
  character: ICharacter;
}
