import { USER_ADD, USER_EDIT, GET_USER_SUCCESS, GET_USER_FAIL, GET_USER_LOADING } from "../actions/userActions";

const initialState = {
  currentUser: {},
  users: [],
  isLoggedIn: false,
  githubUser: null,
  error: null,
  loading: false
};


export function userReducer (state = initialState, action) {
  console.log(action, "action")
  console.log(state, "state")
  switch (action.type) {
    case USER_ADD: {
      const users = [...state.users];
      users.push(action.item);
      return { ...state, users };
    }

    case USER_EDIT: {
      const users = [...state.users];
      users.splice(action.editItem, 1, action.newValue);
      return { ...state, users };
    }

    case GET_USER_SUCCESS:{
      return {...state, githubUser: action.user}
    }

    case GET_USER_FAIL: {
      return {...state, error: action.error }
    }

    case GET_USER_LOADING: {
      return {...state, loading: action.loading }
    }
  }

  return state;
}