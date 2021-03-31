import {AuthorizationStatus} from "../../const";
import {ActionType} from "../action";


const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: null,
};
const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UNAUTHORIZE:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authInfo: null
      };
    case ActionType.AUTHORIZE:
      return {
        ...state,
        authInfo: action.payload,
        authorizationStatus: AuthorizationStatus.AUTH
      };
  }

  return state;
};

export {user};
