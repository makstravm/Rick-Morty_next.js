import { API } from "api";
import Preloader from "components/Preloader";
import { jwtDecode } from "helpers/jwtDecode";
import { useSession } from "next-auth/react";
import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { IUser } from "components/Profile/types";

interface Iuu {
  user: IUser | null;
  setUser: (data: IUser) => void;
}
export const UserContext = createContext<Iuu>({
  user: null,
  setUser: () => {},
});

export const UserContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { data, status } = useSession();

  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    if (data) {
      const { sub } = jwtDecode(data.accessToken as string);

      API.get<IUser>(`users/${sub}`).then((res) => setUser(res));
    }
  }, [data]);

  if (status === "loading") {
    return <Preloader />;
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
