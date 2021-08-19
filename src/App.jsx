
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Switch ,Route} from"react-router-dom";
import Home from './home';
import Team from './team';
import About from './about';
export default function App() {
  return (<Router>
    <Switch>
    <div>
    <Route exact path="/">
      <Home/>
      </Route>
      <Route exact path="/team">
      <Team/>
      </Route>
      <Route exact path="/about">
      <About/>
      </Route>
    </div>
    </Switch>
    </Router>
  );
}
