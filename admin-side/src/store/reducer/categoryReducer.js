import { ADD_CATEGORY, SET_CATEGORIES } from "../actionTypes";

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
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.data],
      };
    default:
      return state;
  }
}

export default categoryReducer;
