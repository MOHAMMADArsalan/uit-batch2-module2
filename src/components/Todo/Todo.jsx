import useTodo from "../../hooks/useTodo";
import { useRef, useState } from "react";
// import { addTodo } from "../../store/actions/todoActions";
// import { connect } from "react-redux";


const Item = (props) => {
  console.log(props);
  return <li >
    {JSON.stringify(props.item)} <input type="checkbox" />
    <button onClick={props.onDeleteItem}>Delete</button>
  </li >;
};
const Todo = ({ myTodos, addNewItem }) => {
  const inputRef = useRef(null);
  const [item, setItem] = useState("");
  const { todos, addTodo, deleteItem } = useTodo();
  // console.log(todos, 'todo component');

  const onAddItem = () => {
    addTodo("new Item " + (todos.length + 1));
    // dispatch(addTodo())
  };

  const onDeleteItem = (index) => {
    deleteItem(index);
    console.log("on Delete Item");
  };

  const onClick = () => {
    inputRef.current.click();
    console.log(inputRef);
  };


  const onInputChange = (event) => {
    setItem(event.target.value);
  }
  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" value={item} onChange={onInputChange}/>
      <ul>{todos.map((item, index) => <Item key={item.id} item={item} onDeleteItem={() => onDeleteItem(index)} />)}</ul>
      <button onClick={onAddItem}>Add Item</button>

      <input ref={inputRef} type="file" hidden />
      <button onClick={onClick}>Pick File</button>
    </div>
  );
};

// function mapReduxStateToProps (state) {
//   console.log(state, 'state ------');

//   return {
//     myTodos: state.todo.todos,
//   };
// }

// function mapDispatchToProps (dispatch) {
//   return {
//     addNewItem: (newItem) => {
//       dispatch(addTodo(newItem));
//     }
//   };
// }

// const myConnect = connect(mapReduxStateToProps, mapDispatchToProps);
// const MyTodo = myConnect(Todo);
export default Todo;