import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import User from "./pages/Users/User";
import NotFound from "./pages/NotFound/NotFound";

//http://github.com/MOHAMMADArsalan/

// React interview questions
// https://github.com/sudheerj/reactjs-interview-questions

import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";

import "./index.css";

const Router = (props) => {
  console.log(props);
  return (
    <BrowserRouter>
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
          <NavLink to="/user" activeClassName="active">User</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;