import useTodo from "../../hooks/useTodo";
import { addTodo } from "../../store/actions/todoActions";
import { connect } from "react-redux";

const Todo = ({ myTodos, addNewItem }) => {
  // const { todos, addTodo } = useTodo();
  // console.log(todos, 'todo component');

  const onAddItem = () => {
    addNewItem("new Item " + (myTodos.length + 1))
    // dispatch(addTodo())
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
  console.log(state, 'state ------');

  return {
    myTodos: state.todo.todos,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    addNewItem: (newItem) => {
      dispatch(addTodo(newItem))
    }
  }
}

const myConnect = connect(mapReduxStateToProps, mapDispatchToProps);
const MyTodo = myConnect(Todo);
export default MyTodo;