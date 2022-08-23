import { ICharacter } from "components/main/Character/types";
import { IEpisodeData } from "components/main/Episode/types";
import { StringLocale } from "yup/lib/locale";

export interface IUser {
  id: number;
  password: string;
  name: string;
  confirmPassword: string;
  email: string;
}

export interface IResponseUser {
  accessToken: string;
  user: IUser;
}

export interface IFavorites {
  episodes: Pick<IEpisodeData, "id" | "name">[] | [];
  characters: Pick<ICharacter, "id" | "name">[] | [];
}

export interface IProfileProps {
  user: IUser;
}

export interface IFavoritesUser {
  id: number;
  favorites: IFavorites;
}
