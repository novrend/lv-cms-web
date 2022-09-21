import { ADD_PRODUCT, SET_PRODUCTS } from "../actionTypes";
import { fetching } from "../../helpers";
function setProducts(resp) {
  return {
    type: SET_PRODUCTS,
    data: resp,
  };
}

export function addProduct(payload) {
  return (dispatch, getState) => {
    fetching(
      "http://localhost:3000/Products",
      "POST",
      {
        "Content-Type": "application/json",
      },
      payload
    ).then((resp) => {
      dispatch({
        type: ADD_PRODUCT,
        data: resp,
      });
    });
  };
}

export function productsFetch() {
  return (dispatch, getState) => {
    fetching("http://localhost:3000/Products").then((resp) => {
      dispatch(setProducts(resp));
    });
  };
}

export function productEdit(data) {
  return (dispatch, getState) => {
    fetching(
      `http://localhost:3000/Products/${data.id}`,
      "PUT",
      {
        "Content-Type": "application/json",
      },
      data
    ).then((resp) => {
      let state = getState();
      state = state.productReducer.products.map((product) => {
        if (product.id === +data.id) {
          return data;
        } else {
          return product;
        }
      });
      dispatch(setProducts(state));
    });
  };
}

export function productDelete(id) {
  return (dispatch, getState) => {
    fetching(`http://localhost:3000/Products/${id}`, "DELETE").then((resp) => {
      let state = getState();
      state = state.productReducer.products.filter(
        (product) => product.id !== +id
      );
      dispatch(setProducts(state));
    });
  };
}
