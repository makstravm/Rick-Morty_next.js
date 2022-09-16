import { IFavoritesUser, IUser } from "components/Profile/types";
import { ThemeMode } from "constants/theme";

const { DARK, LIGHT } = ThemeMode;

export interface IUserContext {
  user: IUser | null;
  favoritesUser: IFavoritesUser;
  setFavoritesUser: (data: IFavoritesUser) => void;
}

export interface IThemeContext {
  theme: typeof LIGHT | typeof DARK;
  changeTheme: (theme: typeof LIGHT | typeof DARK) => void;
}
