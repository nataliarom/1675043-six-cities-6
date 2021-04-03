import hotelReducer from "./hotel/hotel-reducer";
import reviewReducer from "./review/review-reducer";
import userReducer from "./user/user-reducer";
import {combineReducers} from "redux";


export const NameSpace = {
  REVIEW: `REVIEW`,
  HOTEL: `HOTEL`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.HOTEL]: hotelReducer,
  [NameSpace.REVIEW]: reviewReducer,
  [NameSpace.USER]: userReducer,
});
