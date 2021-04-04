import {ReviewActionType} from "./action";


const initialState = {
  reviews: [],
  reviewError: null,
  reviewSaved: false
};
const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ReviewActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      };
    case ReviewActionType.SET_REVIEW_ERROR:
      return {
        ...state,
        reviewSaved: false,
        reviewError: action.payload
      };
    case ReviewActionType.SET_REVIEW_SUCCESS:
      return {
        ...state,
        reviewSaved: true,
        reviewError: null
      };
    case ReviewActionType.CLEAR_RESULT:
      return {
        ...state,
        reviewSaved: false,
        reviewError: null
      };
  }

  return state;
};

export default reviewReducer;
