import { AuthContext, IAuthContext } from "context/Auth";
import { useContext } from "react";

export function useAuth() {
  const value = useContext(AuthContext as React.Context<IAuthContext>);
  return value
}