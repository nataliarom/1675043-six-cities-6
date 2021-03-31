import {hotel} from "./hotel/hotel";
import {review} from "./review/review";
import {user} from "./user/user";
import {combineReducers} from "redux";

export const NameSpace = {
  REVIEW: `REVIEW`,
  HOTEL: `HOTEL`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.HOTEL]: hotel,
  [NameSpace.REVIEW]: review,
  [NameSpace.USER]: user,
});
