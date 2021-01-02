import React, { Component } from 'react';
import axios from 'axios';

import './Counter.css';

class Counter extends Component {

  constructor() {
    super();

    this.state = {
      counter: 0,
      username: '',
      user: null,
      loading: false
    };

  }

  fetchGithubUser = () => {
    const url = 'https://api.github.com/users/' + this.state.username;
    this.setState({
      loading: true
    });
    axios.get(url)
      .then((response) => {
        this.setState({
          loading: false,
          user: response.data
        });
      })
      .catch((error) => { console.log(error); });
  };
  componentDidMount () {
    //  this.interval = setInterval(() => {
    //     console.log('SetInterval')
    //   }, 500)
    console.log('Component Mounted');
    // this.fetchGithubUser();
  }

  componentWillUnmount () {
    console.log('Component will un Mounted');
    clearInterval(this.interval);
  }

  componentDidUpdate () {
    console.log(this.state.counter, 'updated');

  }

  componentWillUpdate () {
    console.log(this.state.counter, 'will update');
  }


  onIncrement = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  onDecrement = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  showCounter = (count) => {
    let text = false;
    if (this.state.counter >= count) {
      text = true;
    } else {
      text = false;
    }
    return text;
  };

  onInputChange = (event) => {
    const username = event.target.value;

    this.setState({
      username
    });
  };


  showUser () {
    if (this.state.loading === true) {
      return <p>Loading...</p>;
    } else if (this.state.user === null) {
      return <p>Type your github user name</p>;
    } else {
      return <h2>Login Name: {this.state.user.login}</h2>;
    }
  }

  shouldComponentUpdate(nextProps) {
    if(nextProps.counter > 10) {
      return false;
    }
    console.log(nextProps, this.props);
    return true;
  }
  render () {
    console.log('render');
    return (
      <div>
        {/* <input type="text" onChange={this.onInputChange} />
        <button onClick={this.fetchGithubUser}>Get User</button>

        {this.showUser()} */}
        <h1>Counter App</h1>
        <h1>Count: {this.props.counter > 10 ? 10 : this.props.counter}</h1>
        {/* <p>Counter is {  this.showCounter(15) ? 'greater than or equal to' : 'less than' } 15 </p>
        <p className={this.showCounter(10) ? 'green' : 'red'} >Counter: {this.state.counter}</p>

        <button onClick={this.onIncrement}>Increment</button>
        {this.showCounter(20) ? <button onClick={this.onDecrement}>Decrement</button>: null} */}
      </div>
    );
  }
}

export default Counter;