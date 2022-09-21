import { SET_PRODUCTS, ADD_PRODUCT } from "../actionTypes";

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
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.data],
      };
    default:
      return state;
  }
}

export default productReducer;
