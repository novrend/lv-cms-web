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
    fetching("http://localhost:3000/product").then((resp) => {
      dispatch(setProducts(resp));
    });
  };
}

export function getProductByCategory(name) {
  return (dispatch, getState) => {
    fetching(`http://localhost:3000/category/product?name=${name}`).then((resp) => {
      dispatch(setProducts(resp));
    });
  };
}
