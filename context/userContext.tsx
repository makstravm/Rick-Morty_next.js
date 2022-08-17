import Preloader from "components/Preloader";
import { useSession } from "next-auth/react";
import { createContext, FC, ReactNode } from "react";

export const UserContext = createContext<any>({});

export const UserContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { data, status } = useSession();

  if (status === "loading") {
    return <Preloader />;
  }

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
