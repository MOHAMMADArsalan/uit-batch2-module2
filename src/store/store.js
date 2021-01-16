import { createStore } from "redux";

const initialState = {
  user: {},
  todos: ["Item 1", "Item 2", "Item 3"],
  users: [],
  isLoggedIn: false
};
function myReducer (state = initialState, action) {
  if (action.type === "ADD") {
    const todos = [...state.todos];
    todos.push("Item " + (todos.length + 1));
    return { ...state, todos };
  } else if (action.type === "EDIT") {
    const todos = [...state.todos];
    todos.splice(action.editItem, 1, action.newValue);
    return { ...state, todos };
  }

  return state;
}


export const store = createStore(myReducer);

// store.dispatch({
//   type: "ADD"
// });
// store.dispatch({
//   type: "EDIT",
//   editItem: 2,
//   newValue: "Edit Item"
// });
// store.dispatch({
//   type: "ADD"
// });

