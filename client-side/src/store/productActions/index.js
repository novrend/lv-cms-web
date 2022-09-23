import { SET_LOADING, SET_PRODUCTS } from "../actionTypes";
import { fetching } from "../../helpers";
import { baseUrl } from "../../config/config";
function setProducts(resp) {
  return {
    type: SET_PRODUCTS,
    data: resp,
  };
}
function setLoading(data) {
  return {
    type: SET_LOADING,
    data,
  };
}

export function productsFetch() {
  return (dispatch, getState) => {
    dispatch(setProducts([]));
    dispatch(setLoading("product"));
    return fetching(`${baseUrl}/product`)
      .then((resp) => {
        if (resp?.error?.message) {
          dispatch(setLoading(false));
          return resp;
        }
        dispatch(setProducts(resp));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function getProduct(id) {
  return (dispatch, getState) => {
    dispatch(setProducts([]));
    dispatch(setLoading("product"));
    return fetching(`${baseUrl}/product/${id}`).then((resp) => {
      return resp;
    });
  };
}

export function getProductByCategory(name) {
  return (dispatch, getState) => {
    dispatch(setProducts([]));
    dispatch(setLoading("product"));
    return fetching(`${baseUrl}/category/product?name=${name}`)
      .then((resp) => {
        if (resp?.error?.message) {
          dispatch(setLoading(false));
          return resp;
        }
        dispatch(setProducts(resp));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}
