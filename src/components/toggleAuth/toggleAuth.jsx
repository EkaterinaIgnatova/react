import { use } from "react";
import { Button } from "../button/button";
import { AuthContext } from "../authContext/authContext";

export const ToggleAuth = () => {
  const { user, toggleAuth } = use(AuthContext);

  return (
    <Button label={user ? "Logout" : "Login"} onClick={toggleAuth}></Button>
  );
};
