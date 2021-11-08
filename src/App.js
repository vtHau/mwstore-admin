import React from "react";
import AuthLayout from "./layouts/AuthLayout";
import { ScrollContext } from "react-router-scroll-4";
import { BrowserRouter as Router } from "react-router-dom";
import { path } from "./constants/path";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";

function App(props) {
  return (
    <Router>
      <ScrollContext>
        <Switch>
          <Route exact path={path.LOGIN} component={Login} />
          <AuthLayout />
        </Switch>
      </ScrollContext>
    </Router>
  );
}

export default App;
