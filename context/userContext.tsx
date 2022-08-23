import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { API } from "api";

import Preloader from "components/Preloader";

import { jwtDecode } from "helpers/jwtDecode";

import { IFavoritesUser, IUser } from "components/Profile/types";
import { IUserContext } from "./types";

export const UserContext = createContext<IUserContext>({
  user: null,
  favoritesUser: null,
  setFavoritesUser: () => {},
});

export const UserContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { data, status } = useSession();

  const [user, setUser] = useState<IUser | null>(null);

  const [favoritesUser, setFavoritesUser] = useState<IFavoritesUser | null>(
    null
  );

  useEffect(() => {
    if (data) {
      const { sub } = jwtDecode(data.accessToken as string);

      API.get<IUser>(`users/${sub}`).then((res) => setUser(res));
      API.get<IFavoritesUser>(`favoritesUser/${sub}`).then((res) =>
        setFavoritesUser(res)
      );
    }
  }, [data]);

  if (status === "loading") {
    return <Preloader />;
  }

  return (
    <UserContext.Provider value={{ user, favoritesUser, setFavoritesUser }}>
      {children}
    </UserContext.Provider>
  );
};
