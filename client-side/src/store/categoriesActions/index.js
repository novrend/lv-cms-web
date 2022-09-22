import { SET_LOADING, SET_CATEGORIES } from "../actionTypes";
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
    dispatch(setLoading("category"));
    return fetching(`${baseUrl}/category`)
      .then((resp) => {
        if (resp?.error?.message) {
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
