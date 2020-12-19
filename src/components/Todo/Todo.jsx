import useTodo from "../../hooks/useTodo";

const Todo = () => {
  const { todos, addTodo } = useTodo();
  console.log(todos, 'todo component');

  const onAddItem = () => {
    addTodo("item 1");
  };
  return (
    <div>
      <h1>Todo App</h1>
      <p>{todos}</p>
      <button onClick={onAddItem}>Add Item</button>
    </div>
  );
};

export default Todo;