import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './LandingPage';
import Homepage from './Homepage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
      <Switch>
        <Route path="/homepage" component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
