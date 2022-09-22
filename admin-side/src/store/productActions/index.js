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

export function addProduct(payload) {
  return (dispatch, getState) => {
    dispatch(setLoading("add"));
    return fetching(
      `${baseUrl}/product`,
      "POST",
      {
        access_token: localStorage.getItem("access_token"),
        "Content-Type": "application/json",
      },
      payload
    )
      .then((resp) => {
        if (resp?.error) return resp;
        dispatch(productsFetch()).then((resp) => {
          if (resp?.error) return resp;
        });
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function productsFetch() {
  return (dispatch, getState) => {
    dispatch(setLoading("fetch"));
    return fetching(`${baseUrl}/product`)
      .then((resp) => {
        if (resp?.error?.message) return resp;
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
      `${baseUrl}/product/${data.id}`,
      "PUT",
      {
        access_token: localStorage.getItem("access_token"),
        "Content-Type": "application/json",
      },
      data
    )
      .then((resp) => {
        if (resp?.error) return resp;
        dispatch(productsFetch()).then((resp) => {
          if (resp?.error) return resp;
        });
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function productDelete(id) {
  return (dispatch, getState) => {
    dispatch(setLoading("delete"));
    return fetching(`${baseUrl}/product/${id}`, "DELETE", {
      access_token: localStorage.getItem("access_token"),
    })
      .then((resp) => {
        if (resp?.error) return resp;
        dispatch(productsFetch()).then((resp) => {
          if (resp?.error) return resp;
        });
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}
