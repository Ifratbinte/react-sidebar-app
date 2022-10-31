import React from "react";

const ThemeContext = React.createContext({
  theme: "light",
  updateTheme: () => {},
});

export default ThemeContext;
