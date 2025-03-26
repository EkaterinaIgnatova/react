import { AuthContext } from "./authContext";
import { user as userInfo } from "../../assets/mock";
import { useState } from "react";

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const toggleAuth = () => {
    setUser(user ? null : userInfo);
  };

  return <AuthContext value={{ user, toggleAuth }}>{children}</AuthContext>;
};
