import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ path, component: Component }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <Route path={path} render={(props) => {
      if (isLoggedIn) {
        return <Component {...props}/>;
      } else {
        return <Redirect to="/" />;
      }
    }} />
  );

};

export default PrivateRoute;