import { SET_PRODUCTS } from "../actionTypes";
import { fetching } from "../../helpers";
import { baseUrl } from "../../config/config";
function setProducts(resp) {
  return {
    type: SET_PRODUCTS,
    data: resp,
  };
}

export function productsFetch() {
  return (dispatch, getState) => {
    fetching(`${baseUrl}/product`).then((resp) => {
      dispatch(setProducts(resp));
    });
  };
}

export function getProductByCategory(name) {
  return (dispatch, getState) => {
    fetching(`${baseUrl}/category/product?name=${name}`).then((resp) => {
      dispatch(setProducts(resp));
    });
  };
}
