import { SET_PRODUCTS } from "../actionTypes";

const initialState = {
  products: [],
  loading: true,
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.data,
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

export default productReducer;
