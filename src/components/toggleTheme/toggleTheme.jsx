import { use } from "react";
import { Button } from "../button/button";
import { ThemeContext } from "../themeContext/themeContext";
import classNames from "classnames";

export const ToggleTheme = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <Button
      label={
        <i
          className={classNames("fa-solid", {
            "fa-sun": theme === "dark",
            "fa-moon": theme === "light",
          })}
        ></i>
      }
      rounded={true}
      onClick={toggleTheme}
    ></Button>
  );
};
