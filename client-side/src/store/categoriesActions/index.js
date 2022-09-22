import { SET_CATEGORIES } from "../actionTypes";
import { fetching } from "../../helpers";
function setCategories(resp) {
  return {
    type: SET_CATEGORIES,
    data: resp,
  };
}

export function categoriesFetch() {
  return (dispatch, getState) => {
    fetching("http://localhost:3000/category").then((resp) => {
      dispatch(setCategories(resp));
    });
  };
}
