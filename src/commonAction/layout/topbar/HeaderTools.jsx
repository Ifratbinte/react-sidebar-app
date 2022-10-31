import React, { useContext } from "react";
import UserSettings from "../../../commonAction/dropdown/topbar/userSettings";
import ThemeContext from "../../../store/themeContext";

function HeaderTools() {
  const themeCtx = useContext(ThemeContext);
  return (
    <>
      <button className="btn-theme" onClick={themeCtx.updateTheme}>
        {themeCtx.theme === "light" ? "dark" : "light"}Mode
      </button>
      <UserSettings />
    </>
  );
}
export default HeaderTools;
