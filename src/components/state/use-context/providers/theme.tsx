import { ReactNode, useContext, useState } from "react";
import { ThemeContex, ThemeContextType } from "../contex/theme";

// Custom hook to use the theme context
const useTheme = (): ThemeContextType | null => {
  const context = useContext(ThemeContex);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Theme provider component
interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>("day");

  const toggleTheme = () => {
    setTheme(theme === "day" ? "night" : "day");
  };

  return (
    <ThemeContex.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContex.Provider>
  );
};

export { ThemeProvider, useTheme };


// GET USER



/**
 * - USERs: id, full_name, emial, password, age, job,create_at, update_at ....
 * - TODOs: id, content, completed, userId, create_at, update_at,..
 *    
 * 
 * - API USER
 * + GET ALL
 * + GET ALL INCLUDE TODOS cua USER 
 * + CREATE USER: email, password (optional maays cai con lai)
 * +  UPDATE
 * + DELETE
 * 
 * - API TODO:
 * + GET ALL
 * + GET ALL INCLUDE USER
 * + CREATE TODO: email, password (optional maays cai con lai)
 * + UPDATE
 * + DELETE
 * 
 */
