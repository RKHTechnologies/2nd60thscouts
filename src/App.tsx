import React from 'react';
import Home from './Components/Home';
import GlobalStyle from './Shared/GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Error404 from './Shared/Error404';
import HeaderBar from './Shared/HeaderBar';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}`} component={Home} />
          <Route component={Error404} />
        </Switch>
        <HeaderBar stickyHeader />
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
