import React, { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { types } from "../types/types";
import { authReducer } from "./authReducer";

interface Props {
  children?: JSX.Element | JSX.Element[];
}
const initialState = {
  logged: false,
};

export const AuthProvider = ({ children }: Props) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);
  const login = async (name = "") => {
    const action = {
      type: types.login,
      payload: { id: "ABC", name: name },
    };
    /* dispatch(); */
  };
  return (
    <AuthContext.Provider value={{ authState }}>
      {children}
    </AuthContext.Provider>
  );
};
