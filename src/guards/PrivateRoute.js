import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { path } from "./../constants/path";

function PrivateRoute({ component: Component, ...rest }) {
  // const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuth = false;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: path.LOGIN,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
