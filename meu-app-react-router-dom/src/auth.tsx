import { createContext, useContext, useState, ReactNode } from "react";

type AuthContextType = {
  user: string | null;
  login: (name: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(() => {
    try {
      return sessionStorage.getItem("user");
    } catch {
      return null;
    }
  });

  const login = (name: string) => {
    setUser(name);
    try {
      sessionStorage.setItem("user", name);
    } catch {
      /* ignora */
    }
  };

  const logout = () => {
    setUser(null);
    try {
      sessionStorage.removeItem("user");
    } catch {
      /* ignora */
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de <AuthProvider>");
  return ctx;
}
