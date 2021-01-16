import useTodo from "../../hooks/useTodo";
import { connect } from "react-redux";

const Todo = ({ myTodos, dispatch }) => {
  const { todos, addTodo } = useTodo();
  console.log(todos, 'todo component');

  const onAddItem = () => {
    dispatch({
      type: "ADD"
    })
  };
  return (
    <div>
      <h1>Todo App</h1>
      <ul>{myTodos.map((item, index) => <li key={index}>{item}</li>)}</ul>
      <button onClick={onAddItem}>Add Item</button>
    </div>
  );
};

function mapReduxStateToProps (state) {
  console.log(state);

  return {
    myTodos: state.todos,
  };
}

const myConnect = connect(mapReduxStateToProps);
const MyTodo = myConnect(Todo);
export default MyTodo;