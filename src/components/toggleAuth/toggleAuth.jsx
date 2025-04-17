import { use } from "react";
import { Button } from "../button/button";
import { AuthContext } from "../authContext/authContext";

export const ToggleAuth = () => {
  const { auth, toggleAuth } = use(AuthContext);

  return (
    <Button
      label={auth.isUserAuth ? "Logout" : "Login"}
      onClick={toggleAuth}
    ></Button>
  );
};
