import React from "react";
import "./style.css";
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import List from './components/List/List';
import Counter from './components/Counter/Counter';

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
        {/* <h1 style={headingStyle} >Todo App</h1>
        <Input onInputChange={this.onInputChange}/>
        <br />
        <br />

        <Button addItem={this.addNewItem}/>
        <List todos={this.state.todos}/> */}
        {this.state.hasError ? <h1>Error</h1>: ''}
        {this.state.showCounter ? <Counter /> : null}
        {/* <button onClick={this.toggleCounter}>Show / Hide Counter</button> */}
      </div>
    )
  }
}

export default App;
