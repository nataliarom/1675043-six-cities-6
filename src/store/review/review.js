import {ActionType} from "../action";


const initialState = {
  reviews: [],
  reviewError: null,
  reviewSaved: false
};
const review = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      };
    case ActionType.SET_REVIEW_ERROR:
      return {
        ...state,
        reviewSaved: false,
        reviewError: action.payload
      };
    case ActionType.SET_REVIEW_SUCCESS:
      return {
        ...state,
        reviewSaved: true,
        reviewError: null
      };
  }

  return state;
};

export {review};
