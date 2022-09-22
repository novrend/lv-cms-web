import { SET_CATEGORIES } from "../actionTypes";

const initialState = {
  categories: [],
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.data,
      };
    default:
      return state;
  }
}

export default categoryReducer;
