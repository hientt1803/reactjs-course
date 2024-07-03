import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the user context
interface UserContextType {
  user: { name: string; email: string } | null;
  setUser: (user: { name: string; email: string } | null) => void;
}

// Create the context with a default value
const UserContext = createContext<UserContextType | undefined>(undefined);

// Custom hook to use the user context
const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// User provider component
interface UserProviderProps {
  children: ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUser };
