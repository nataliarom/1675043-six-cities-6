import browserHistory from "../../browser-history";
import {UserActionType} from "../user/action";

export const redirect = (_store) => (next) => (action) => {
  if (action.type === UserActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
