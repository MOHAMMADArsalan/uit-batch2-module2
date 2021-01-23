const BASE_NAME = "TODO";

export const TODO_ADD = `${BASE_NAME}/ADD`;
export const TODO_EDIT =  `${BASE_NAME}/EDIT`

export const addTodo = (newItem) => {
  return {
    type: TODO_ADD,
    item: newItem
  }
}