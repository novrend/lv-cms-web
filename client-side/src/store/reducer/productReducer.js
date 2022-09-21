import { SET_PRODUCTS } from "../actionTypes";

const initialState = {
  products: [],
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.data,
      };
    default:
      return state;
  }
}

export default productReducer;
