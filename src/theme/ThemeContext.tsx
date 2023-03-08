import React, { createContext, useState, useEffect } from 'react';
import { Theme, lightTheme, darkTheme } from "./colors";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

interface MyComponentProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  toggleTheme: () => {
    
  },
});

export const ThemeProvider: React.FC<MyComponentProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);
  
  // Retrieve the theme from local storage or use the default light theme
  // const storedTheme = localStorage.getItem('theme');
  // const initialTheme = storedTheme ? JSON.parse(storedTheme) : lightTheme;
  // const [theme, setTheme] = useState<Theme>(initialTheme);

  // Set the selected theme in local storage
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
