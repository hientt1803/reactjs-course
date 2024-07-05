import { createContext } from "react";

// Define the shape of the theme context
export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Create the context with a default value
export const ThemeContex = createContext<ThemeContextType | null>(null);
