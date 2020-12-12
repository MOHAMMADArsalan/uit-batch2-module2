import { useState, useEffect } from 'react';

// componentWillUnmount ]
// componentDidMount ] - useEffect
//componentDidUpdate ]


const Counter = () => {

  const [count, setCount] = useState(100);
  const [doubleCount, setDoubleCount] = useState(100);
  const [inputValue, setInputValue] = useState('');


  useEffect(() => {
    const interval = setInterval(() => {
      console.log("inside setinterval", count)
      setCount((currentCount) => {
        return currentCount + 1
      })
    }, 1000)
    console.log("inside useEffect");

    return () => {
      clearInterval(interval);
      console.log("component Unmount")
    }
  }, []); // empty dependencies array will run once

  useEffect(() => {
    console.log("count dependent useEffect");
  }, [count, doubleCount]); // dependent on count state;

  useEffect(() => {
    console.log("useEffect will run on every change");
  })
  // const [count, setCount] = state;
  // const count = state[0];
  // const setCount = state[1];

  const onIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const onDoubleIncrement = () => {
    setDoubleCount(count * 2)

  };
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };
  // hooks
  return (
    <div>
      <h1>Counter 2 App</h1>
      <h2>Count: {count}</h2>
      <h2>Double Count: {doubleCount}</h2>
      {/* <button onClick={onIncrement}>Increment</button>
      <button onClick={onDoubleIncrement}>Double Increment</button> */}

      <input type="text" onChange={onInputChange} />
    </div>
  );
};

export default Counter;