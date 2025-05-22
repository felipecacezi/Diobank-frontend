import { createContext, useState } from "react";

interface IAppContext {
  userName: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setUserName: (userName: string) => void;
}

export const AppContext = createContext({} as IAppContext);
export const AppContextProvider = ({children}: any) => {
  const [userName, setUserName] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{userName, isLoggedIn, setIsLoggedIn, setUserName}}>
      {children}
    </AppContext.Provider>
  );
}