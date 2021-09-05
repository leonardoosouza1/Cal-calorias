import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Fruit from "./Fruit";
import CreateFruit from "./CreateFruit";
import EditFruit from "./EditFruit";
import DeleteFruit from "./DeleteFruit";

const Pages = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/fruit/:id">
      <Fruit />
    </Route>
    <Route path="/createFruit">
      <CreateFruit />
    </Route>
    <Route path="/editFruit/:id">
      <EditFruit />
    </Route>
    <Route path="/deleteFruit/:id">
      <DeleteFruit />
    </Route>
  </Switch>
);

export default Pages;
