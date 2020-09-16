import React from "react";
import { Switch, Route } from "react-router-dom";
import Default from "./Default";
import FourOhFour from "./FourOhFour";

export default ({ location }) => (
  <Switch location={location}>
    <Route key="default" path="/" component={Default} exact />
    <Route key="404" path="/" component={FourOhFour} />
  </Switch>
);
