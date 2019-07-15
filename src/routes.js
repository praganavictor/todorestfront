import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";
import Header from "./components/header";

import signup from "./pages/SignUp";
import login from "./pages/Login";
import tasks from "./pages/task";
import newTask from "./pages/task/new";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={login} />
        <Route path="/signup" component={signup} />
        <PrivateRoute path="/app" component={tasks} />
        <PrivateRoute path="/newtask" component={newTask} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
