import { FC, useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

import { IFavoriteBtnProps } from "./types";

import style from "./FavoriteBtn.module.scss";
import { ThemeMode } from "constants/theme";

const FavoriteBtn: FC<IFavoriteBtnProps> = ({ isFavorite, handleClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${style.favoriteBtn} ${
        ThemeMode.LIGHT === theme && style.light
      }`}
    >
      <button onClick={(e) => handleClick(e)}>
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="-6 -2 218.333 206.333"
          enableBackground="new 0 0 218.333 210.333"
          xmlSpace="preserve"
          fill={isFavorite ? "#2eff00" : "transparent"}
        >
          <path d="M206.333,76.952c0,25.365-13.967,46.069-42.7,63.297c-36.253,21.737-54.063,47.905-54.239,48.167c-1.393,2.076-3.729,3.321-6.228,3.321c-2.497,0-4.83-1.243-6.223-3.314C96.671,188.02,78.66,161.81,42.7,140.249C13.967,123.021,0,102.316,0,76.952c0-30.228,19.701-62.354,56.211-62.354c24.457,0,39.282,10.829,46.956,18.941c7.674-8.113,22.499-18.941,46.956-18.941C186.633,14.597,206.333,46.724,206.333,76.952z" />
        </svg>
      </button>
    </div>
  );
};

export default FavoriteBtn;
