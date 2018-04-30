// routes.js
// Handle routing
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import AppContainer from '../../ui/containers/AppContainer.jsx';
import MRContainer from '../../ui/containers/MRContainer.jsx';
import RopCSContainer from '../../ui/containers/RopCSContainer.jsx';
import Phys1Container from '../../ui/containers/Phys1Container.jsx';
import MSussman from '../../ui/pages/MSussman.jsx';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={AppContainer}/>
      <Route path="/ropcs" component={RopCSContainer}/>
      <Route path="/phys1" component={Phys1Container}/>
      <Route path="/mrocha" component={MRContainer}/>
      <Route path="/msussman" component={MSussman}/>
    </div>
  </Router>
);

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});
