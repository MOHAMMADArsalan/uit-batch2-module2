import { getUserByName } from "../../api/userApi";

const BASE_NAME = "USER";

export const USER_ADD = `${BASE_NAME}/ADD`;
export const USER_EDIT = `${BASE_NAME}/EDIT`;
export const GET_USER_LOADING = `${BASE_NAME}/GET_LOADING`;
export const GET_USER_SUCCESS = `${BASE_NAME}/GET_SUCCESS`;
export const GET_USER_FAIL = `${BASE_NAME}/GET_FAIL`;

export const addUser = (newItem) => {
  return {
    type: USER_ADD,
    item: newItem
  };
};

export const getGithubUserByName = (name) => {
  return (dispatch) => {
    dispatch({
      type: GET_USER_LOADING,
      loading: true
    })
    getUserByName(name)
      .then((res) => {
        dispatch({
          user: res.data,
          type: GET_USER_SUCCESS
        });
        dispatch({
          type: GET_USER_LOADING,
          loading: false
        })
      })
      .catch(error => {
        dispatch({
          error: "Failed to get user",
          type: GET_USER_FAIL
        });
        dispatch({
          type: GET_USER_LOADING,
          loading: false
        })
      });
  };
};