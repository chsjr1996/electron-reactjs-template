// Main libs
import React from "react";
import { Router, Route, Switch } from 'react-router-dom';

// Pages
import { Home } from '@Page/Home'

// Utils
import appHistory from "@Util/appHistory";

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