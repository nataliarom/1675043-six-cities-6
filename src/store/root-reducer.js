import {hotel} from "./hotel/hotel";
import {review} from "./review/review";
import {user} from "./user/user";
import {combineReducers} from "redux";
import {city} from "./city/city";

export const NameSpace = {
  REVIEW: `REVIEW`,
  HOTEL: `HOTEL`,
  USER: `USER`,
  CITY: `CITY`
};

export default combineReducers({
  [NameSpace.HOTEL]: hotel,
  [NameSpace.REVIEW]: review,
  [NameSpace.USER]: user,
  [NameSpace.CITY]: city
});
