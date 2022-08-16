import { ICharacter } from "components/main/Character/types";
import { IEpisodeData } from "components/main/Episode/types";

export interface IUser {
  id: number;
  password: string;
  name: string;
  confirmPassword: string;
  email: string;
  favorites: IFavorites;
}

export interface IFavorites {
  episodes: Pick<IEpisodeData, "id" | "name">[] | [];
  characters: Pick<ICharacter, "id" | "name">[] | [];
}

export interface IProfileProps {
  user: IUser;
}
