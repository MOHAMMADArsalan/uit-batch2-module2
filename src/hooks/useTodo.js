import { useState } from "react";

const useTodo = () => {
  const [todos, setTodos] = useState([]);
  //123
  const addTodo = (item) => {
    const newTodos = [...todos];
    newTodos.push(item);
    setTodos(newTodos); //123
    console.log(todos, 'todo hook');
  }

  return {
    todos: todos,
    addTodo: addTodo
  }
}

export default useTodo;