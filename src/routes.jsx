import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Users from "./pages/Users/User";
import NotFound from "./pages/NotFound/NotFound";
import UserDetail from "./pages/User/User";
import Login from "./pages/Login/Login";
import PrivateRoute from "./AppRoutes/PrivateRoute";

//http://github.com/MOHAMMADArsalan/

// React interview questions
// https://github.com/sudheerj/reactjs-interview-questions

import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";

import "./index.css";

const Router = (props) => {
  console.log(props);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/about">
          <About />
        </Route>
        <PrivateRoute path="/users" component={Users} />
        <Route path="/user/:userId" component={UserDetail}/>
        <PrivateRoute path="/dashboard" component={Home}/>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;