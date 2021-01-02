import { useHistory, NavLink } from "react-router-dom";
import Counter from "../../components/Counter/Counter";
import { useState } from "react";

// https://www.google.com/search?q=pakistan&oq=pakistan&aqs=chrome.0.69i59j69i61l3.2219j0j7&sourceid=chrome&ie=UTF-8
const Home = () => {
  const [counter, setCounter] = useState(0);
  const history = useHistory();
  const goToAboutPage = () => {
    history.push({
      pathname: "/about",
      state: "My About page"
    });
  };

  console.log(history);

  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" activeStyle={{
            color: "blue",
            fontWeight: "bold",
          }} exact>Home</NavLink>
          {/* <NavLink to="/" activeClassName="active" exact>Home</NavLink> */}
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
        <li>
          <NavLink to="/users" activeClassName="active">Users</NavLink>
        </li>
      </ul>
      <h1>Home count: {counter}</h1>
      <Counter counter={counter} />
      <button onClick={() => setCounter(counter + 1)}>Update Count</button>
      <h1>Home Page</h1>
      <button onClick={goToAboutPage}>About</button>
    </div>
  );
};

export default Home;