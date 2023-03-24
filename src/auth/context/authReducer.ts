import { types } from "../types/types";
interface stateAuth {
  logged: boolean;
  name?: string;
}

type AuthAction =
  | { type: "loggin"; payload: "" }
  | { type: "logout"; payload: "" };

export const authReducer = (state: stateAuth, action: AuthAction) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };

    case types.logout:
      return {
        logged: false,
      };
    default:
      return state;
  }
};
