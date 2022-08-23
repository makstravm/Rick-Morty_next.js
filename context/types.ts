import { IFavoritesUser, IUser } from "components/Profile/types";

export interface IUserContext {
  user: IUser | null;
  favoritesUser: IFavoritesUser | null;
  setFavoritesUser: (data: IFavoritesUser) => void;
}
