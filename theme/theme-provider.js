"use client";
import React, { useMemo, useState, useEffect, createContext, useContext } from "react";
import { ThemeProvider as MUIThemeProvider, CssBaseline } from "@mui/material";
import createAppTheme from "./theme";

// Create context with default values
const ThemeModeContext = createContext({
  themeMode: "light",
  setThemeMode: () => {},
});

export function useThemeMode() {
  return useContext(ThemeModeContext);
}

/**
 * AppThemeProvider
 * - Provides MUI Theme and theme mode state
 * - Reads/writes theme mode from/to localStorage
 */
export default function AppThemeProvider({ children, mode = "light" }) {
  const [themeMode, setThemeMode] = useState(mode);

  // On mount, read theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setThemeMode(savedTheme);
    }
  }, []);

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  // Memoize MUI theme
  const theme = useMemo(() => createAppTheme({ mode: themeMode }), [themeMode]);

  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeModeContext.Provider>
  );
}
