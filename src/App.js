import * as React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Welcome() {
  return <div> Welcome! </div>;
}

function About() {
  return <div> About! </div>;
}

function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export function App() {
  return (
    <>
      <Routing />
    </>
  );
}
