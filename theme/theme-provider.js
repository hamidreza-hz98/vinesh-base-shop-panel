"use client";
import React, { useMemo, useState, createContext, useContext } from "react";
import { ThemeProvider as MUIThemeProvider, CssBaseline } from "@mui/material";
import createAppTheme from "./theme";
import createEmotionCache from "./rtl/createEmotionCache";

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
 */
export default function AppThemeProvider({ children, mode = "light" }) {
  const cache = useMemo(() => createEmotionCache(), []);

  // Theme mode state (light/dark)
  const [themeMode, setThemeMode] = useState(mode);

  // Memoize theme when themeMode changes
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
