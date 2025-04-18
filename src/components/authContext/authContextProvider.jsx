import { AuthContext } from "./authContext";
import { useState } from "react";

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isUserAuth: false, user: null });

  const toggleAuth = () => {
    setAuth(
      auth.isUserAuth
        ? { isUserAuth: false, user: null }
        : {
            isUserAuth: true,
            user: { id: "20bed9b5-9c7b-4771-8221-75b74ed1904a", name: "Diana" },
          }
    );
  };

  return <AuthContext value={{ auth, toggleAuth }}>{children}</AuthContext>;
};
