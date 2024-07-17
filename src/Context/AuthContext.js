import { createContext, useState } from "react";

export const AuthCtx = createContext();

export const AuthProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState({
    token: "",
  });

   

  const value = { userAuth, setUserAuth };
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
};
