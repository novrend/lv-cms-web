import { ADD_CATEGORY, SET_CATEGORIES, SET_LOADING } from "../actionTypes";
import { fetching } from "../../helpers";
import { baseUrl } from "../../config/config";
function setCategories(resp) {
  return {
    type: SET_CATEGORIES,
    data: resp,
  };
}
function setLoading(data) {
  return {
    type: SET_LOADING,
    data,
  };
}

export function categoriesFetch() {
  return (dispatch, getState) => {
    dispatch(setLoading("fetch"));
    fetching(`${baseUrl}/category`)
      .then((resp) => {
        dispatch(setCategories(resp));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function addCategory(payload) {
  return (dispatch, getState) => {
    dispatch(setLoading("add"));
    return fetching(
      `${baseUrl}/category`,
      "POST",
      {
        access_token: localStorage.getItem("access_token"),
        "Content-Type": "application/json",
      },
      payload
    )
      .then((resp) => {
        dispatch({
          type: ADD_CATEGORY,
          data: resp,
        });
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function categoryEdit(data) {
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    return fetching(
      `${baseUrl}/category/${data.id}`,
      "PUT",
      {
        access_token: localStorage.getItem("access_token"),
        "Content-Type": "application/json",
      },
      data
    )
      .then((resp) => {
        let state = getState();
        state = state.categoryReducer.categories.map((category) => {
          if (category.id === +data.id) {
            return data;
          } else {
            return category;
          }
        });
        dispatch(setCategories(state));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function categoryDelete(id) {
  return (dispatch, getState) => {
    dispatch(setLoading("delete"));
    return fetching(`${baseUrl}/category/${id}`, "DELETE", {
      access_token: localStorage.getItem("access_token"),
    })
      .then((resp) => {
        let state = getState();
        state = state.categoryReducer.categories.filter(
          (category) => category.id !== +id
        );
        dispatch(setCategories(state));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}
