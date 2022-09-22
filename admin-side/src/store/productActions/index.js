import { ADD_PRODUCT, SET_LOADING, SET_PRODUCTS } from "../actionTypes";
import { fetching } from "../../helpers";
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

export function addProduct(payload) {
  return (dispatch, getState) => {
    dispatch(setLoading('add'));
    return fetching(
      "http://localhost:3000/Products",
      "POST",
      {
        "Content-Type": "application/json",
      },
      payload
    )
      .then((resp) => {
        dispatch({
          type: ADD_PRODUCT,
          data: resp,
        });
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function productsFetch() {
  return (dispatch, getState) => {
    dispatch(setLoading('fetch'));
    fetching("http://localhost:3000/Products")
      .then((resp) => {
        dispatch(setProducts(resp));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function productEdit(data) {
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    return fetching(
      `http://localhost:3000/Products/${data.id}`,
      "PUT",
      {
        "Content-Type": "application/json",
      },
      data
    )
      .then((resp) => {
        let state = getState();
        state = state.productReducer.products.map((product) => {
          if (product.id === +data.id) {
            return data;
          } else {
            return product;
          }
        });
        dispatch(setProducts(state));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function productDelete(id) {
  return (dispatch, getState) => {
    dispatch(setLoading('delete'));
    return fetching(`http://localhost:3000/Products/${id}`, "DELETE")
      .then((resp) => {
        let state = getState();
        state = state.productReducer.products.filter(
          (product) => product.id !== +id
        );
        dispatch(setProducts(state));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}
