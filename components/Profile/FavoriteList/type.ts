import { string } from "yup";

export interface IFavoriteListProps {
  list: { id: number; name: string }[] | [];
  title: string;
  path: string;
}
