import { IFavoritesUser, IUser } from "components/Profile/types";

export interface IUserContext {
  user: IUser | null;
  favoritesUser: IFavoritesUser;
  setFavoritesUser: (data: IFavoritesUser) => void;
}
