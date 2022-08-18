import { MouseEvent } from "react";

export interface IFavoriteBtnProps {
  isFavorite: boolean | null;
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
}
