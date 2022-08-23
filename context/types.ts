import { IFavoriteUser, IUser } from "components/Profile/types";

export interface IUserContext {
  user: IUser | null;
  favoriteUser: IFavoriteUser | null;
  setFavoriteUser: (data: IFavoriteUser) => void;
}
