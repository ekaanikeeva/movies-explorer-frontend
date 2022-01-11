import React from "react";
import { Route, Redirect } from "react-router-dom";
import PageNotFound from "./PageNotFound/PageNotFound";
import Register from "./Register/Register";
import Login from "./Login/Login";
function ProtectedRoute({ component: Component, loggedIn, ...props }) {
  return (
    <Route>
      {() => (loggedIn ? <Component {...props} /> : <Redirect to="/" />)}
    </Route>
  );
}

export default ProtectedRoute;
