import {ActionType} from "../action";


const initialState = {
  reviews: [],
};
const review = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      };
  }

  return state;
};

export {review};
