import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import { todoReducer } from "./reducers/todoReducer";
import { userReducer } from "./reducers/userReducer";

const reducers = combineReducers({
  todo:todoReducer,
  user: userReducer
})

const middlewares = applyMiddleware(reduxThunk)
export const store = createStore(reducers, middlewares);

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

