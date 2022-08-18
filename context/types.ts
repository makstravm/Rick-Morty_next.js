import { IUser } from "components/Profile/types";

export interface IUserContext {
  user: IUser | null;
  setUser: (data: IUser) => void;
}
