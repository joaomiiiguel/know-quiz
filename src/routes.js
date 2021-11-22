import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomeQuestion from './page/HomeQuestion'
import Confirm from './page/Confirm'
import Quiz from './page/Quiz'


export default function router() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <HomeQuestion />
          </Route>
          <Route path="/Confirm">
            <Confirm />
          </Route>
          <Route path="/Quiz">
            <Quiz />
          </Route>
        </Switch>
    </Router>
  );
}