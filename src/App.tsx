import React from 'react';
import Home from './Components/Home';
import GlobalStyle from './Shared/GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Error404 from './Shared/Error404';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={"/2nd60thscouts"} component={Home} />
          <Route component={Error404} />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
