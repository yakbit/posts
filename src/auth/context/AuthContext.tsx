import { createContext } from "react";
import { types } from "../types/types";
export type AuthContextProps = {
  authState: { logged: boolean };
};
export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);
