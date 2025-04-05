import { use } from "react";
import { Button } from "../button/button";
import { ThemeContext } from "../themeContext/themeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export const ToggleTheme = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <Button
      label={<FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />}
      rounded
      onClick={toggleTheme}
    />
  );
};
