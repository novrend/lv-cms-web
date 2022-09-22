import { SET_CATEGORIES } from "../actionTypes";
import { fetching } from "../../helpers";
import { baseUrl } from "../../config/config";
function setCategories(resp) {
  return {
    type: SET_CATEGORIES,
    data: resp,
  };
}

export function categoriesFetch() {
  return (dispatch, getState) => {
    fetching(`${baseUrl}/category`).then((resp) => {
      dispatch(setCategories(resp));
    });
  };
}
