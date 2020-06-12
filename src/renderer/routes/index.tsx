import React from "react";
import { Router, Route, Switch } from 'react-router-dom';

import { Home } from '../pages/Home';

import appHistory from "../utils/appHistory";

export default function Routes(): JSX.Element {
  return (
    <>
      <Router history={appHistory}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  )
}