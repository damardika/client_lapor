import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import DataMasuk from "./DataMasuk/DataMasuk";
import StatusData from "./StatusData/StatusData";
import FormData from "./FormData/FormData";
import Home from "./Home/Home";
import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/DataMasuk" component={DataMasuk} />
          <Route path="/StatusData" component={StatusData} />
          <Route path="/FormData" component={FormData} />
        </Switch>
      </Router>
    );
  }
}
