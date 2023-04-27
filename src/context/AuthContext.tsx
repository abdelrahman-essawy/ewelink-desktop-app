// src/context/MyContext.tsx
import React, { createContext, useContext, useMemo } from 'react';

type MyContextType = {
  // Define your context properties here
};

const AuthContext = createContext<MyContextType | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      'useAuthContext must be used within a useAuthContextProvider'
    );
  }
  return context;
};

type TAuthProvider = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: TAuthProvider) {
  // Define your context state and methods here
  const contextValue = useMemo<MyContextType>(() => {
    // Define your context value here
    return {
      // Define your context value properties here
      username: 'John Doe',
    };
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
