import { createContext } from "react";

export const AuthContext = createContext({
  auth: { isUserAuth: false, user: null },
  toggleAuth: () => {},
});
