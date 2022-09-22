import { SET_CATEGORIES } from "../actionTypes";

const initialState = {
  categories: [],
  loading: true,
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.data,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.data,
      };
    default:
      return state;
  }
}

export default categoryReducer;
