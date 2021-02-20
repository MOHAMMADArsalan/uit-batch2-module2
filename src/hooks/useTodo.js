import { useState } from "react";

const useTodo = () => {
  const [todos, setTodos] = useState([]);
  //123
  const addTodo = (item) => {
    const newTodos = [...todos];
    newTodos.push({ item, id: Date.now() });
    setTodos(newTodos); //123
    console.log(todos, 'todo hook');
  };

  const deleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos); //123
    console.log(todos, 'todo hook');
  };

  return {
    todos: todos,
    addTodo: addTodo,
    deleteItem: deleteItem
  };
};

export default useTodo;