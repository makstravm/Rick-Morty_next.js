import { IFavoritesUser, IUser } from "components/Profile/types";

export interface IUserContext {
  user: IUser | null;
  favoritesUser: IFavoritesUser;
  setFavoritesUser: (data: IFavoritesUser) => void;
}

export interface IThemeContext {
  theme: "dark" | "light";
  changeTheme: (theme: "dark" | "light") => void;
}
