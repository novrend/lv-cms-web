import { SET_PRODUCTS } from "../actionTypes";
import { fetching } from "../../helpers";
function setProducts(resp) {
  return {
    type: SET_PRODUCTS,
    data: resp,
  };
}

export function productsFetch() {
  return (dispatch, getState) => {
    fetching("http://localhost:3000/Products").then((resp) => {
      dispatch(setProducts(resp));
    });
  };
}
