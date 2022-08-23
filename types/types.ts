import { ReactNode } from "react";

import { ICharacter } from "components/main/Character/types";
import { IEpisodeData } from "components/main/Episode/types";
import { ILocation } from "components/main/Location/types";
import { IFavoritesUser, IUser } from "components/Profile/types";

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

export interface ILayoutProps {
  children: ReactNode;
  title: string;
}

export interface IProfilePageProps {
  user: IUser;
  favoriteUser: IFavoritesUser;
}

export interface IHomeProps {
  characters: Pick<ICharacter, "id" | "name" | "image">[];
}

export interface ICharactersProps {
  info: Omit<IAllInfo, "count">;
  results: Pick<ICharacter, "id" | "name" | "image">[];
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

export interface IEpisodesOfSeasonsProps {
  season: Pick<IEpisodeData, "id" | "name" | "episode">[];
}

export interface IEpisodePageProps {
  episodeData: IEpisodeData;
}

export interface ILocationsPageProps {
  info: Omit<IAllInfo, "count">;
  results: Pick<ILocation, "id" | "name">[];
}

export interface ILocationPageProps {
  location: ILocation;
}
