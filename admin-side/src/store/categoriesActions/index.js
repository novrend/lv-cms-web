import { SET_CATEGORIES, SET_LOADING } from "../actionTypes";
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
    dispatch(setCategories([]));
    dispatch(setLoading("fetch"));
    return fetching(`${baseUrl}/category`, 'GET', {
      access_token: localStorage.getItem("access_token"),
    })
      .then((resp) => {
        if (resp?.error) {
          dispatch(setLoading(false));
          return resp;
        }
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
        if (resp?.error) {
          dispatch(setLoading(false));
          return resp;
        }
        dispatch(categoriesFetch()).then((resp) => {
          if (resp?.error) {
            dispatch(setLoading(false));
            return resp;
          }
        });
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function categoryEdit(data) {
  return (dispatch, getState) => {
    dispatch(setLoading("edit"));
    return fetching(
      `${baseUrl}/category/${data.id}`,
      "PUT",
      {
        access_token: localStorage.getItem("access_token"),
        "Content-Type": "application/json",
      },
      { name: data.name }
    )
      .then((resp) => {
        if (resp?.error) {
          dispatch(setLoading(false));
          return resp;
        }
        dispatch(categoriesFetch()).then((resp) => {
          if (resp?.error) {
            dispatch(setLoading(false));
            return resp;
          }
        });
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
        if (resp?.error) {
          dispatch(setLoading(false));
          return resp;
        }
        dispatch(categoriesFetch()).then((resp) => {
          if (resp?.error) {
            dispatch(setLoading(false));
            return resp;
          }
        });
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function getCategory(id, access_token) {
  return (dispatch, getState) => {
    return fetching(`${baseUrl}/category/${id}`, "GET", {
      access_token,
    }).then((resp) => {
      return resp;
    });
  };
}
