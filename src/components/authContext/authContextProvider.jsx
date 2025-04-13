import { AuthContext } from "./authContext";
import { useState } from "react";

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const userInfo = {
    name: "Ivan",
  };

  const toggleAuth = () => {
    setUser(user ? null : userInfo);
  };

  return <AuthContext value={{ user, toggleAuth }}>{children}</AuthContext>;
};
