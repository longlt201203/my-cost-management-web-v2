import { createContext, useContext } from "react";
import { Profile } from "../../types/auth";

export interface AuthContextProps {
  profile: Profile;
}

const AuthContext = createContext<AuthContextProps | null>(null);
export default AuthContext;

export function useAuth() {
  const context = useContext(AuthContext);
  if (context == null)
    throw new Error("useAuth() must be use within AuthProvider");
  return context;
}
