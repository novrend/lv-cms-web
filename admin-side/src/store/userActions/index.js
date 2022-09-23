import { baseUrl } from "../../config/config";
import { fetching } from "../../helpers";
export function login(user) {
  return (dispatch, getState) => {
    return fetching(
      `${baseUrl}/user/login`,
      "POST",
      { "Content-Type": "application/json" },
      user
    ).then((resp) => {
      return resp;
    });
  };
}

export function register(user) {
  return (dispatch, getState) => {
    return fetching(
      `${baseUrl}/user/register`,
      "POST",
      { "Content-Type": "application/json" },
      user
    ).then((resp) => {
      return resp;
    });
  };
}
