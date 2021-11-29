import React from "react";
import { ScrollContext } from "react-router-scroll-4";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";

function App(props) {
  return (
    <Router>
      <ScrollContext>
        <Routes />
      </ScrollContext>
    </Router>
  );
}

export default App;
