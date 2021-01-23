import { TODO_ADD, TODO_EDIT } from "../actions/todoActions";

const initialState = {
  todos: ["Item 1", "Item 2", "Item 3"],
};


export function todoReducer (state = initialState, action) {
  console.log(action, "action")
  console.log(state, "state")
  switch (action.type) {
    case TODO_ADD: {
      const todos = [...state.todos];
      todos.push(action.item);
      return { ...state, todos };
    }

    case TODO_EDIT: {
      const todos = [...state.todos];
      todos.splice(action.editItem, 1, action.newValue);
      return { ...state, todos };
    }
  }

  return state;
  // if (action.type === "ADD") {
  //   const todos = [...state.todos];
  //   todos.push("Item " + (todos.length + 1));
  //   return { ...state, todos };
  // } else if (action.type === "EDIT") {
  //   const todos = [...state.todos];
  //   todos.splice(action.editItem, 1, action.newValue);
  //   return { ...state, todos };
  // }

  return state;
}