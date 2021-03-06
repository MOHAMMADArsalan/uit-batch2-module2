import React from "react";
import "./style.css";
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import List from './components/List/List';
import Counter from './components/Counter/Counter';
import Counter2 from './components/Counter2/Counter';
import Todo from "./components/Todo/Todo";
import CountDown from "./components/CountDown/CountDown";

// create new app
// https://reactjs.org/docs/create-a-new-react-app.html

class App extends React.Component {
  constructor( ) {
    super();

    this.state = {
      todos: [],
      input: '',
      showCounter: true,
      hasError: false
    }
  }
  onInputChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  addNewItem = () => {
    const newTodos = [...this.state.todos];
    newTodos.push(this.state.input);

    this.setState({
      todos: newTodos
    })
  }
  toggleCounter = () => {
    this.setState({
      showCounter: !this.state.showCounter
    })
  }

  componentDidCatch(error, info) {
    console.log(error, info)
    this.setState({
      hasError: true
    })
  }
  render() {
    const headingStyle = {
      color: 'dodgerblue',
      textAlign: 'center'
    }
    return (
      <div className="container">
        <CountDown />
        {/* {this.state.showCounter ? <Counter2 /> : null} */}
        {/* <h1 style={headingStyle} >Todo App</h1>
        <Input onInputChange={this.onInputChange}/>
        <br />
        <br />

        <Button addItem={this.addNewItem}/>
        <List todos={this.state.todos}/> */}
        {/* {this.state.hasError ? <h1>Error</h1>: ''}
        {this.state.showCounter ? <Counter /> : null} */}
        {/* <button onClick={this.toggleCounter}>Show / Hide Counter</button> */}
      </div>
    )
  }
}

export default App;
