import { useReducer } from "react";
import ThemeContext from "./themeContext";

const defaultState = {
  theme: "light",
  updateTheme: () => {},
};

const ThemeContextProvider = ({ children }) => {
  const themeReducer = (state, action) => {
    if (action.type === "UPDATE") {
      return {
        ...state,
        theme: action.payload,
      };
    }
  };

  const [themeState, dispatch] = useReducer(themeReducer, defaultState);

  const onUpdateLayout = () => {
    dispatch({ type: "UPDATE", payload: themeState.theme === "dark" ? "light" : "dark" });
  };

  const themeCtx = {
    theme: themeState.theme,
    updateTheme: onUpdateLayout,
  };

  return <ThemeContext.Provider value={themeCtx}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
