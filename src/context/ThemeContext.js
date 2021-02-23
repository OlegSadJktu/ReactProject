import React, { useEffect, useState, useContext } from "react";

const ThemeContext = React.createContext({
  theme: "LIGHT",
  setDark: () => {
    console.log('i cant setDark')
  },
  setLight: () => {
    console.log('i cant setLight')

  },
  setYellow: () => {
    console.log('i cant setYellow')

  },
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("LIGHT");

  const setDark = () => {
    setTheme("DARK");
  };
  const setLight = () => {
    setTheme("LIGHT");
  };
  const setYellow = () => {
    setTheme("YELLOW");
  };

  return (
    <ThemeContext.Provider
      value={{ theme, setDark, setLight, setYellow }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { setDark, setLight, setYellow, theme } = useContext(ThemeContext);
  return {
    theme,
    setLight,
    setDark,
    setYellow,
    isLight: theme === "LIGHT",
    isDark: theme === "DARK",
    isYellow: theme === "YELLOW",

  };
};

