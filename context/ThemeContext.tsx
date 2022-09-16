import { ThemeMode } from "constants/theme";
import { createContext, FC, ReactNode, useEffect, useState } from "react";

import { IThemeContext } from "./types";

const { DARK, LIGHT } = ThemeMode;

export const ThemeContext = createContext<IThemeContext>({
  theme: DARK,
  changeTheme: () => {},
});

const ThemeContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<typeof DARK | typeof LIGHT>(DARK);

  const changeTheme = (theme: typeof LIGHT | typeof DARK) => setTheme(theme);

  useEffect(() => {
    if (theme === DARK) {
      document.body.classList.remove("white-mode");
    } else {
      document.body.classList.add("white-mode");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextWrapper;
