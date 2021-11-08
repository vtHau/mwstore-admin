import React from "react";
import AuthLayout from "./layouts/AuthLayout";
import { ScrollContext } from "react-router-scroll-4";
import { BrowserRouter as Router } from "react-router-dom";
import { path } from "./constants/path";
import { Route, Switch } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";

function App(props) {
  return (
    <Router>
      <ScrollContext>
        <Switch>
          <Route exact path={path.SIGN_IN} component={SignIn} />
          <AuthLayout />
        </Switch>
      </ScrollContext>
    </Router>
  );
}

export default App;
