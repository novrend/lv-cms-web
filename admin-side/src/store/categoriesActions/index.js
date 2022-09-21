import { ADD_CATEGORY, SET_CATEGORIES } from "../actionTypes";
import { fetching } from "../../helpers";
function setCategories(resp) {
  return {
    type: SET_CATEGORIES,
    data: resp,
  };
}

export function categoriesFetch() {
  return (dispatch, getState) => {
    fetching("http://localhost:3000/Categories").then((resp) => {
      dispatch(setCategories(resp));
    });
  };
}

export function addCategory(payload) {
  return (dispatch, getState) => {
    fetching(
      "http://localhost:3000/Categories",
      "POST",
      {
        "Content-Type": "application/json",
      },
      payload
    ).then((resp) => {
      dispatch({
        type: ADD_CATEGORY,
        data: resp,
      });
    });
  };
}

export function categoryEdit(data) {
  return (dispatch, getState) => {
    fetching(
      `http://localhost:3000/Categories/${data.id}`,
      "PUT",
      {
        "Content-Type": "application/json",
      },
      data
    ).then((resp) => {
      let state = getState();
      state = state.categoryReducer.categories.map((category) => {
        if (category.id === +data.id) {
          return data;
        } else {
          return category;
        }
      });
      dispatch(setCategories(state));
    });
  };
}

export function categoryDelete(id) {
  return (dispatch, getState) => {
    fetching(`http://localhost:3000/Categories/${id}`, "DELETE").then(
      (resp) => {
        let state = getState();
        state = state.categoryReducer.categories.filter(
          (category) => category.id !== +id
        );
        dispatch(setCategories(state));
      }
    );
  };
}
