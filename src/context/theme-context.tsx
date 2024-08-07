import { useEffect, createContext, useContext } from "react";

type Theme = "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const THEME_STORAGE_KEY = "theme";

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  useEffect(() => {
    const initialTheme: Theme = "dark";
    window.localStorage.setItem(THEME_STORAGE_KEY, initialTheme);
    document.documentElement.classList.add(initialTheme);
  }, []);

  const toggleTheme = () => {
    // Since the theme is always dark, the toggle function can be omitted.
    // If needed, handle any future theme changes here.
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: "dark", // Always dark
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context; 
}
