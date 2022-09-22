import { SET_IMAGES, ADD_IMAGE, SET_LOADING } from "../actionTypes";

const initialState = {
  images: [],
  loading: true,
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IMAGES:
      return {
        ...state,
        images: action.data,
      };
    case ADD_IMAGE:
      return {
        ...state,
        images: [...state.images, action.data],
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
