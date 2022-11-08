import React, { useContext } from "react";
import UserSettings from "../../../commonAction/dropdown/topbar/userSettings";
import ThemeContext from "../../../store/themeContext";

function HeaderTools() {
  const themeCtx = useContext(ThemeContext);
  return (
    <>
      <ul className="header-tools">
        <li className="btn-theme" onClick={themeCtx.updateTheme}>
          {themeCtx.theme === "dark" ? "light" : "dark"}
        </li>
        <li>
          <UserSettings />
        </li>
      </ul>
    </>
  );
}
export default HeaderTools;
