import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import tasks from "./pages/task";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={tasks} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
