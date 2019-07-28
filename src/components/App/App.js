import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../elements/Header/Header";
import Home from "../Home/Home";
import NotFound from "../elements/NotFound/NotFound";
import Movie from "../Movie/Movie";

const App = () => {
  return (
    <div>
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/:movieId" component={Movie} exact />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
};

export default App;
