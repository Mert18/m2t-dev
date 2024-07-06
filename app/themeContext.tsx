// themeContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
  theme: 'nature', // default value
  changeTheme: (theme: string) => {}, // default function
});

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState('nature');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'nature';
    setTheme(storedTheme);
    document.querySelector("html")?.setAttribute("data-theme", storedTheme);
  }, []);

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.querySelector("html")?.setAttribute("data-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);