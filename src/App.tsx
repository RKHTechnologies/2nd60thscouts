import React from 'react';
import Home from './Components/Home';
import GlobalStyle from './Shared/GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Error404 from './Shared/Error404';
import HeaderBar from './Shared/HeaderBar';
import About from './Components/About';
import Beavers from './Components/Beavers';
import Cubs from './Components/Cubs';
import Scouts from './Components/Scouts';
import Explorers from './Components/Explorers';
import OurCalendar from './Components/OurCalendar';
import Join from './Components/Join';
import Documents from './Components/Documents';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}`} component={Home} />
          <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About} />
          <Route exact path={`${process.env.PUBLIC_URL}/beavers`} component={Beavers} />
          <Route exact path={`${process.env.PUBLIC_URL}/cubs`} component={Cubs} />
          <Route exact path={`${process.env.PUBLIC_URL}/scouts`} component={Scouts} />
          <Route exact path={`${process.env.PUBLIC_URL}/explorers`} component={Explorers} />
          <Route exact path={`${process.env.PUBLIC_URL}/ourCalendar`} component={OurCalendar} />
          <Route exact path={`${process.env.PUBLIC_URL}/joinUs`} component={Join} />
          <Route exact path={`${process.env.PUBLIC_URL}/documents`} component={Documents} />
          <Route component={Error404} />
        </Switch>
        <HeaderBar stickyHeader />
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
