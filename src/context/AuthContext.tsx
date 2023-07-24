import React, { createContext, useState } from 'react';

interface AuthContextProps {
  children: React.ReactNode;
}

const AuthContext = createContext<any>(null);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
