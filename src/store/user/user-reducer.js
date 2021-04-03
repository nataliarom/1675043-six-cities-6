import {AuthorizationStatus} from "../../const";
import {UserActionType} from "./action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionType.UNAUTHORIZE:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authInfo: null
      };
    case UserActionType.AUTHORIZE:
      return {
        ...state,
        authInfo: action.payload,
        authorizationStatus: AuthorizationStatus.AUTH
      };
  }

  return state;
};

export default userReducer;
