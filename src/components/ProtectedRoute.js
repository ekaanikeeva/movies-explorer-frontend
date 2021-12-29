import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, loggedIn, ...props }) {
  return (
    <Route>
      {() =>
        loggedIn ? <Component {...props} /> : <Redirect exact to="/" />
      }
    </Route>
  );
}

export default ProtectedRoute;
