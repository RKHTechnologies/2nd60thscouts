import React from 'react';
import GlobalStyle from './Shared/GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Error404 from './Shared/Error404';
import HeaderBar from './Shared/HeaderBar';
import Home from './pages/Home';
import About from './pages/About';
import Beavers from './pages/Beavers';
import Cubs from './pages/Cubs';
import Scouts from './pages/Scouts';
import Explorers from './pages/Explorers';
import OurCalendar from './pages/OurCalendar';
import Documents from './pages/Documents';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <HeaderBar stickyHeader />
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}`} component={Home} />
          <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About} />
          <Route exact path={`${process.env.PUBLIC_URL}/beavers`} component={Beavers} />
          <Route exact path={`${process.env.PUBLIC_URL}/cubs`} component={Cubs} />
          <Route exact path={`${process.env.PUBLIC_URL}/scouts`} component={Scouts} />
          <Route exact path={`${process.env.PUBLIC_URL}/explorers`} component={Explorers} />
          <Route exact path={`${process.env.PUBLIC_URL}/ourCalendar`} component={OurCalendar} />
          <Route exact path={`${process.env.PUBLIC_URL}/documents`} component={Documents} />
          <Route component={Error404} />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
