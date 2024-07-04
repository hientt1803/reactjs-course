import { ReactNode, createContext, useContext, useState } from "react";

interface IUser {
  name: string;
  email: string;
}

// Define the shape of the user context
interface UserContextType {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

// Create the context with a default value
const UserContext = createContext<UserContextType | null>(null);

// Custom hook to use the user context
const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

// User provider component
interface UserProviderProps {
  children: ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUser };
