
import {ActionType} from "../action";

const initialState = {
  city: null,
  cities: [],
};


const city = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        city: action.payload ? action.payload : state.cities[0],
      };

    case ActionType.LOAD_CITIES:
      return {
        ...state,
        cities: action.payload,
      };

  }
  return state;
};

export {city};
