import { createContext, FC, ReactNode, useEffect, useState } from "react";

import { IThemeContext } from "./types";

export const ThemeContext = createContext<IThemeContext>({
  theme: "dark",
  changeTheme: () => {},
});

const ThemeContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const changeTheme = (theme: "dark" | "light") => setTheme(theme);

  useEffect(() => {
    if (theme === "dark") {
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
