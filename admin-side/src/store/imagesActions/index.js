import { ADD_IMAGE, SET_LOADING, SET_IMAGES } from "../actionTypes";
import { fetching } from "../../helpers";
function setImages(resp) {
  return {
    type: SET_IMAGES,
    data: resp,
  };
}
function setLoading(data) {
  return {
    type: SET_LOADING,
    data,
  };
}

export function addImage(payload) {
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    fetching(
      "http://localhost:3000/Images",
      "POST",
      {
        "Content-Type": "application/json",
      },
      payload
    )
      .then((resp) => {
        dispatch({
          type: ADD_IMAGE,
          data: resp,
        });
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function imagesFetch() {
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    fetching("http://localhost:3000/Images")
      .then((resp) => {
        dispatch(setImages(resp));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function imageEdit(data) {
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    fetching(
      `http://localhost:3000/Images/${data.id}`,
      "PUT",
      {
        "Content-Type": "application/json",
      },
      data
    )
      .then((resp) => {
        let state = getState();
        state = state.imageReducer.images.map((image) => {
          if (image.id === +data.id) {
            return data;
          } else {
            return image;
          }
        });
        dispatch(setImages(state));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function imageDelete(id) {
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    fetching(`http://localhost:3000/Images/${id}`, "DELETE")
      .then((resp) => {
        let state = getState();
        state = state.imageReducer.images.filter(
          (image) => image.id !== +id
        );
        dispatch(setImages(state));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}
